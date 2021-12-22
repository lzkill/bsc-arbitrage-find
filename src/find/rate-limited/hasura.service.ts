import { Injectable } from '@nestjs/common';
import Bottleneck from 'bottleneck';
import { AppConfigService } from 'src/config/config.service';
import { HasuraService } from 'src/shared/hasura/hasura.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class RateLimitedHasuraService {
  private limiter: Bottleneck;

  constructor(
    private config: AppConfigService,
    private logger: AppLoggerService,
    private trades: HasuraService,
  ) {
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
        minTime: this.config.hasura.minInterval,
      });
      this.limiter.on('error', function (error) {
        this.logger.error(error);
      });
    } catch (e) {
      this.logger.error(e);
    }
  }

  createTrade(args) {
    return this.limiter.schedule(() => this.trades.createTrade(args));
  }
}
