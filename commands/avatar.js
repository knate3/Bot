module.exports = {
	name: 'avatar',
	guildOnly: true,
	description: 'Get someones avatar.',
	usage: 'avatar <@user>',
	aliases: ['profile'],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 3,
	execute(client, message) {
		const user = message.guild.member(message.mentions.users.first()) || message.author;
		message.channel.send(user.avatarURL);
	}
}