import { Injectable } from '@nestjs/common';
import Bottleneck from 'bottleneck';
import { HasuraService } from 'src/shared/hasura/hasura.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class RateLimitedHasuraService {
  private limiter: Bottleneck;

  constructor(private logger: AppLoggerService, private trades: HasuraService) {
    this.init();
  }

  init() {
    this.setRateLimiter();
    this.logger.log(`Rate limited Hasura service initialized`);
  }

  private setRateLimiter() {
    try {
      this.limiter = new Bottleneck({
        maxConcurrent: 1,
        minTime: 60000 / 60,
      });
      this.limiter.on('error', function (error) {
        this.logger.error(error);
      });
    } catch (e) {
      this.logger.error(e);
    }
  }

  async createTrade(args) {
    const trade = await this.limiter.schedule(() =>
      this.trades.createTrade(args),
    );
    return trade.insert_biscoint_trade_one.id;
  }
}
