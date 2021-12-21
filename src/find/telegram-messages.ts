const emoji = require('node-emoji');

export function formatWelcomeMessage() {
  const prefix = `${emoji.get(':dollar:')} `;
  return `${prefix}Welcome to the ${bold('Biscoint Arbitrage Find Service')}!`;
}

export function formatHelpMessage() {
  const prefix = emoji.get(':bulb:');
  return `${prefix}${bold('Available commands:')}

  - /baf_start nothing really useful
  - /baf_enable enable the service
  - /baf_disable disable the service
  - /baf_config get the service config
  - /baf_volume (get | set 123) get/set the trading volume
  - /baf_ping pong back
  - /baf_help show this message`;
}

export function formatServiceEnabledMessage() {
  const message = 'Service enabled';
  return formatGeneralInfoMessage(message);
}

export function formatServiceDisabledMessage() {
  const message = 'Service disabled';
  return formatGeneralInfoMessage(message);
}

export function formatInvalidArgumentMessage() {
  const prefix = emoji.get(':x:');
  return `${prefix} Invalid argument`;
}

export function formatVolumeMessage(volume: number) {
  const message = `Volume is currently ${volume}`;
  return formatGeneralInfoMessage(message);
}

export function formatVolumeUpdatedMessage(volume: number) {
  const message = `Volume set to ${volume}`;
  return formatGeneralInfoMessage(message);
}

export function formatPingMessage() {
  const message = 'Pong';
  return formatGeneralInfoMessage(message);
}

export function formatGeneralInfoMessage(message: string) {
  const prefix = emoji.get(':grey_exclamation:');
  return `${prefix}${message}`;
}

function bold(text: string) {
  return `<b>${text}</b>`;
}
