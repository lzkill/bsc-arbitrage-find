import { Injectable } from '@nestjs/common';
import { IOfferResult } from 'biscoint-api-node/dist/typings/biscoint';
import { RABBITMQ_BISCOINT_CONFIRM_KEY } from 'src/app-constants';
import { Coin } from 'src/config/config-schemas';
import { AppConfigService } from 'src/config/config.service';
import { BrokerService } from 'src/shared/broker/broker.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';
import { BackOffPolicy, Retryable } from 'typescript-retry-decorator';
import { RateLimitedBiscointService } from './rate-limited/biscoint.service';
import { RateLimitedHasuraService } from './rate-limited/hasura.service';

@Injectable()
export class FindService {
  private cycleCount = 0;

  constructor(
    private config: AppConfigService,
    private logger: AppLoggerService,
    private biscoint: RateLimitedBiscointService,
    private broker: BrokerService,
    private hasura: RateLimitedHasuraService,
  ) {}

  async find(args?: { coin?: Coin }) {
    try {
      if (this.config.app.enabled) {
        const startedAt = Date.now();

        let { coin } = {
          coin: undefined,
          ...args,
        };

        if (!coin) {
          const coins = this.config.app.coins;
          coin = coins[Math.floor(Math.random() * coins.length)];
        }

        const hasFoundArbitrage = await this.findArbitrage(coin);
        this.cycleCount += 1;

        const finishedAt = Date.now();
        const elapsedMs = finishedAt - startedAt;

        this.logger.log(
          `Find cycle #${this.cycleCount} took ${elapsedMs.toFixed(2)}ms`,
        );

        const waitIntervalMs = this.biscoint.getOfferWaitIntervalMs(elapsedMs);
        this.biscoint.resetOfferCount();

        const _args = { coin: undefined };
        if (hasFoundArbitrage) {
          _args.coin = coin;
        }

        setTimeout(this.find.bind(this, _args), waitIntervalMs);
      } else setTimeout(this.find.bind(this), 5000);
    } catch (e) {
      this.logger.error(e);
    }
  }

  private async findArbitrage(coin: Coin) {
    let hasFoundArbitrage = false;
    try {
      const openOffer = await this.biscoint.getOffer({
        base: coin,
        amount: this.config.app.volume.toString(),
        op: 'buy',
        isQuote: true,
      });

      if (openOffer) {
        const openPrice = +openOffer.efPrice;

        const closeOffer = await this.biscoint.getOffer({
          base: coin,
          amount: openOffer.baseAmount,
          op: 'sell',
          isQuote: false,
        });

        if (closeOffer) {
          const closePrice = +closeOffer.efPrice;

          if (closePrice > openPrice) {
            hasFoundArbitrage = true;

            await this.broker.publish(RABBITMQ_BISCOINT_CONFIRM_KEY, {
              offers: [openOffer, closeOffer],
              stopOnFail: true,
            });

            this.createTrade(openOffer, closeOffer);
          }
        }
      }

      return hasFoundArbitrage;
    } catch (e) {
      this.logger.error(e);
    }
  }

  @Retryable({
    maxAttempts: 10,
    backOffPolicy: BackOffPolicy.ExponentialBackOffPolicy,
    backOff: 1000,
    exponentialOption: { maxInterval: 5000, multiplier: 2 },
  })
  private createTrade(openOffer: IOfferResult, closeOffer: IOfferResult) {
    try {
      const args = {
        owner: this.config.app.name,
        type: 'arbitrage',
        openOffer: openOffer,
        closeOffer: closeOffer,
        status: 'open',
      };

      return this.hasura.createTrade(args);
    } catch (e) {
      this.logger.error(e);
    }
  }
}
