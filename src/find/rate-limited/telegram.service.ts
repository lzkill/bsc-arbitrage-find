import { Injectable } from '@nestjs/common';
import Bottleneck from 'bottleneck';
import { volumeSchema } from 'src/config/config-schemas';
import { AppConfigService } from 'src/config/config.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';
import { Telegraf } from 'telegraf';
import {
  formatHelpMessage,
  formatInvalidArgumentMessage,
  formatPingMessage,
  formatServiceDisabledMessage,
  formatServiceEnabledMessage,
  formatVolumeMessage,
  formatVolumeUpdatedMessage,
  formatWelcomeMessage,
} from './telegram-messages';

@Injectable()
export class TelegramService {
  private bot: Telegraf;
  private limiter: Bottleneck;

  constructor(
    private config: AppConfigService,
    private logger: AppLoggerService,
  ) {
    if (this.config.telegram.token) {
      this.bot = new Telegraf(this.config.telegram.token);
    }
  }

  async init() {
    this.setRateLimiter();

    if (this.config.telegram.token) {
      this.bot.command('baf_start', async (ctx) => {
        try {
          const message = formatWelcomeMessage();
          await this.sendMessage(message, ctx.chat.id).then(() => {
            return this.sendMessage(formatHelpMessage(), ctx.chat.id);
          });
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_enable', async (ctx) => {
        try {
          this.config.app.enabled = true;
          const message = formatServiceEnabledMessage();
          await this.sendMessage(message, ctx.chat.id);
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_disable', async (ctx) => {
        try {
          this.config.app.enabled = false;
          const message = formatServiceDisabledMessage();
          await this.sendMessage(message, ctx.chat.id);
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_config', async (ctx) => {
        try {
          const message = this.stringify(this.config.app);
          await this.sendMessage(message, ctx.chat.id, false);
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_volume', async (ctx) => {
        try {
          const args = ctx.update.message.text.split(' ');
          const command = args[1];

          if (command === 'get') {
            const message = formatVolumeMessage(this.config.app.volume);
            await this.sendMessage(message, ctx.chat.id);
          }
          if (command === 'set') {
            const volume = +args[2];

            if (volumeSchema.validate(volume).error) {
              const message = formatInvalidArgumentMessage();
              await this.sendMessage(message, ctx.chat.id);
            } else {
              this.config.app.volume = volume;
              const message = formatVolumeUpdatedMessage(volume);
              await this.sendMessage(message, ctx.chat.id);
            }
          }
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_ping', async (ctx) => {
        try {
          const message = formatPingMessage();
          await this.sendMessage(message, ctx.chat.id);
        } catch (e) {
          this.logger.error(e);
        }
      });

      this.bot.command('baf_help', async (ctx) => {
        try {
          const message = formatHelpMessage();
          await this.sendMessage(message, ctx.chat.id);
        } catch (e) {
          this.logger.error(e);
        }
      });

      try {
        this.bot.launch();
        this.logger.log(`Telegram bot launched`);
      } catch (e) {
        this.logger.error(e);
      }
    }
  }

  private setRateLimiter() {
    this.limiter = new Bottleneck({
      maxConcurrent: 1,
      minTime: 5000,
    });
    this.limiter.on('error', function (error) {
      console.error(error);
    });
  }

  sendMessage(message: string, chatId?: any, removeWhiteSpaces = true) {
    if (this.canChat() && this.config.telegram.enabled) {
      let formatted = message.trim();
      if (removeWhiteSpaces) formatted = this.removeWhiteSpaces(formatted);
      return this.limiter.schedule(() =>
        this.bot.telegram.sendMessage(
          chatId ? chatId : this.config.telegram.chatId,
          formatted,
          {
            parse_mode: 'HTML',
          },
        ),
      );
    }
  }

  private canChat() {
    return this.config.telegram.chatId;
  }

  private removeWhiteSpaces(multiline: string) {
    return multiline
      .split(/\r?\n/)
      .map((row) => row.trim().split(/\s+/).join(' '))
      .join('\n');
  }

  private stringify(value: any) {
    return JSON.stringify(value, (k, v) => v ?? undefined, 2);
  }
}
