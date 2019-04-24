module.exports = {
	name: 'about',
	description: 'Learn about me!',
	usage: 'about',
	aliases: [],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 3,
	execute(client, message) {
		const {
			ownerName
		} = require('./config.json');
		message.channel.send(`H-Hey there I'm ${client.user.username}, I'm here to help you and make your server fun and awesome I was made by knate3#9781 and assembled ${ownerName}`)
	}
}