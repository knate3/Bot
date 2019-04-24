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
		var user = message.mentions.users.first() || message.author;
		if (user.id === client.user.id) return message.channel.send('Aww love ya')
		message.channel.send('mmm give me some of that love boooboo bear ' + user)

	}
}