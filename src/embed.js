import { MessageBuilder } from 'discord-webhook-node';

export const generateMessage = (channel, username, content, avatar) => {
	const footerIcon = avatar || 'https://enhancer.pro/img/logo.svg';
	return new MessageBuilder()
		.setTitle(username)
		.setDescription(content)
		.setFooter(`#${channel} · ${new Date().toLocaleString()}`, footerIcon);
};
