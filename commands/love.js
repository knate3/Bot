module.exports = {
	name: 'love',
	description: 'Give someone love!',
	usage: 'love <@user>',
	aliases: [],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 2,
	execute(client, message) {
		message.channel.send( message.author + ' Sends love to you, ' + message.mentions.users.first())

	}
}