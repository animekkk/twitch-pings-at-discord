# twithc-pings-at-discord

---

### Install
1. `npm install`
2. Rename `config.example.json` to `config.json`, and fill it.
3. Rename `channels.example.1/2.json` to `channels.json`, and fill it.
3. `npm run start`

---  

### Channels
For now there are two formats that we support.
```json
[
	{
		"username": "czarny_animekkk1337",
		"avatar": "https://static-cdn.jtvnw.net/jtv_user_pictures/e3c825b2-698a-46d4-bcd6-4da05dd80c1f-profile_image-70x70.png"
	}
	... and more
]
```
```json
[
    "czarny_animekkk1337"
]
```
When using second format there will not be streamers avatars in the discord message.

---

Inspired by [RavenBTW](https://github.com/Ravenbtw/twitch-mentions-to-discord-webhook).