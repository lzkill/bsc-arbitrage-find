import { Injectable } from '@nestjs/common';
import Biscoint from 'biscoint-api-node';
import {
  IMetaResult,
  IOfferParams,
  IOfferResult,
} from 'biscoint-api-node/dist/typings/biscoint';
import { AppConfigService } from 'src/config/config.service';

@Injectable()
export class BiscointService {
  private biscoint: Biscoint;

  constructor(private config: AppConfigService) {
    this.biscoint = new Biscoint({
      apiKey: this.config.biscoint.apiKey,
      apiSecret: this.config.biscoint.apiSecret,
      apiUrl: this.config.biscoint.apiUrl,
      apiTimeout: this.config.biscoint.apiTimeout,
    });
  }

  meta(): Promise<IMetaResult> {
    return this.biscoint.meta();
  }

  offer(args: IOfferParams): Promise<IOfferResult> {
    return this.biscoint.offer(args);
  }
}
