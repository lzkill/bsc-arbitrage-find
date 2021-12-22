import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FindService } from './find/find.service';
import { RateLimitedBiscointService } from './find/rate-limited/biscoint.service';
import { TelegramService } from './find/rate-limited/telegram.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(0);

  const telegram = app.get(TelegramService);
  await telegram.init();

  const biscoint = app.get(RateLimitedBiscointService);
  await biscoint.init();

  const find = app.get(FindService);
  await find.find();
}

bootstrap();
