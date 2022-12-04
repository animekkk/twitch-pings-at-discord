import fs from 'fs';
import { startBot } from './chat.js';
import { loadChannels } from './channels.js';
import { Webhook } from 'discord-webhook-node';

export const config = JSON.parse(fs.readFileSync('config.json'));
export const webhook = new Webhook(config.webhook);

loadChannels();
startBot();
