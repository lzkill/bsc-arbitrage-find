import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RABBITMQ_BISCOINT_EXCHANGE } from 'src/app-constants';
import { AppConfigModule } from 'src/config/config.module';
import { BrokerService } from './broker.service';

@Module({
  imports: [
    AppConfigModule,
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get('rabbitmq.uri'),
          prefetchCount: 1,
          exchanges: [
            {
              name: RABBITMQ_BISCOINT_EXCHANGE,
              type: 'direct',
            },
          ],
          connectionInitOptions: { wait: false },
        };
      },
    }),
  ],
  providers: [BrokerService],
  exports: [BrokerService],
})
export class BrokerModule {}
