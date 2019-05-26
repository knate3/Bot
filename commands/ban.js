module.exports = {
	name: 'ban',
	description: 'bans a user.',
	usage: 'ban <@user>',
	aliases: [],
	args: false,
	owner: true,
	guildOnly: true,
	cooldown: 3,
	execute(client, message) {
		const user = message.mentions.members.first();

		if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I\'m unable to ban this member i do not have the following permissions `BAN_MEMBERS`');

		if (!user || user.id === message.author.id || user.id === client.user.id) return message.channel.send('Please mention a valid user!');

		if (user.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send("That user's role greater or equal to my role.");

		user.ban().then(user => {
			message.channel.send('I have banned user: ' + user)
		});

	}
}