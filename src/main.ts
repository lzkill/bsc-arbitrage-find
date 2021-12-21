import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FindService } from './find/find.service';
import { RateLimitedBiscointService } from './find/rate-limited/biscoint.service';
import { TelegramService } from './find/telegram.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(0);

  const telegram = app.get(TelegramService);
  await telegram.init();

  const offer = app.get(RateLimitedBiscointService);
  await offer.init();

  const find = app.get(FindService);
  await find.find();
}

bootstrap();
