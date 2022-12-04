import fs from 'fs';

export let avatars = {};
export let botChannels;

export const loadChannels = () => {
	const loadedChannels = JSON.parse(fs.readFileSync('channels.json'));

	// Check type of first element to determine what format is it
	if (typeof loadedChannels[0] === 'object') {
		botChannels = loadedChannels.map((channel) => channel.username);
		loadedChannels.forEach((channel) => (avatars[channel.username] = channel.avatar));
	} else botChannels = loadedChannels;
	console.info(`Loaded ${botChannels.length} from channels.json with ${Object.keys(avatars).length} avatars.`);
};
