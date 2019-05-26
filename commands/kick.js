module.exports = {
	name: 'kick',
	description: 'Kicks a user.',
	usage: 'kick <@user>',
	aliases: ['remove'],
	args: false,
	owner: true,
	guildOnly: true,
	cooldown: 4,
	execute(client, message) {
		const user = message.guild.member(message.mentions.users.first());

		if (message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I\'m unable to kick this member i do not have the following permissions `KICK_MEMBERS`');

		if (!user || user.id === message.author.id || user.id === client.user.id) return message.channel.send('Please mention a valid user!');

		if (user.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send("That user's role greater or equal to my role.");

		user.kick().then(user => {
			message.channel.send('I have kicked user: ' + user)
		});
	}
}