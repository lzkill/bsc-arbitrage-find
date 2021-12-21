import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config-helper';
import { AppConfigModule } from './config/config.module';
import { FindModule } from './find/find.module';
import { AppLoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [
    AppLoggerModule,
    AppConfigModule,
    FindModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [() => config.createConfig()],
    }),
  ],
})
export class AppModule {}
