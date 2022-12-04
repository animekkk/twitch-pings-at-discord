import tmi from 'tmi.js';
import { webhook, config } from './index.js';
import { generateMessage } from './embed.js';
import { avatars, botChannels } from './channels.js';

export const startBot = () => {
	const bot = new tmi.Client({
		options: {
			joinInterval: 500,
		},
		channels: botChannels,
	});

	bot.on('message', (channel, tags, message, self) => {
		if (self) return;

		channel = channel.slice(1);

		let found = false;
		for (const word of config.words) {
			if (message.includes(word)) {
				found = true;
				break;
			}
		}

		if (found) {
			const author = tags.username || 'unknown';
			webhook.send(generateMessage(channel, author, message, avatars[channel]));
			console.info(new Date().toLocaleString(), '|', `${author} has pinged you at #${channel}: ${message}`);
		}
	});

	bot.connect();
	console.info('Bot started.');
};
