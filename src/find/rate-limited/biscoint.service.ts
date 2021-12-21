import { Injectable } from '@nestjs/common';
import { IOfferParams } from 'biscoint-api-node/dist/typings/biscoint';
import { BiscointService } from 'src/shared/biscoint/biscoint.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class RateLimitedBiscointService {
  private windowMs: number;
  private maxRequests: number;

  private offerCount = 0;

  constructor(
    private logger: AppLoggerService,
    private biscoint: BiscointService,
  ) {}

  async init() {
    const meta = await this.biscoint.meta();
    const { windowMs, maxRequests } = meta.endpoints.offer.post.rateLimit;
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.logger.log(`Rate limited Biscoint service initialized`);
  }

  getOffer(args: IOfferParams) {
    try {
      this.offerCount += 1;
      return this.biscoint.offer(args);
    } catch (e) {
      this.logger.error(e);
    }
  }

  getOfferWaitIntervalMs(elapsedMs: number) {
    const minIntervalMs = Math.ceil(
      (this.offerCount * this.windowMs) / this.maxRequests,
    );
    return Math.max(minIntervalMs - elapsedMs, 0);
  }

  resetOfferCount() {
    this.offerCount = 0;
  }
}
