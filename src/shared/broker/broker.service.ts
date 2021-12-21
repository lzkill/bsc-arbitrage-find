import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { RABBITMQ_BISCOINT_EXCHANGE } from 'src/app-constants';

@Injectable()
export class BrokerService {
  constructor(private amqp: AmqpConnection) {}

  publish(key: string, message: any) {
    return this.amqp.publish(RABBITMQ_BISCOINT_EXCHANGE, key, message, {
      persistent: true,
    });
  }
}
