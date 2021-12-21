import { Module } from '@nestjs/common';
import { BiscointModule } from 'src/shared/biscoint/biscoint.module';
import { BrokerModule } from 'src/shared/broker/broker.module';
import { HasuraModule } from 'src/shared/hasura/hasura.module';
import { RateLimitedBiscointService } from './rate-limited/biscoint.service';
import { FindService } from './find.service';
import { TelegramService } from './telegram.service';
import { RateLimitedHasuraService } from './rate-limited/hasura.service';

@Module({
  imports: [BiscointModule, BrokerModule, HasuraModule],
  providers: [
    FindService,
    RateLimitedBiscointService,
    RateLimitedHasuraService,
    TelegramService,
  ],
})
export class FindModule {}
