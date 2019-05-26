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
		message.channel.send((message.mentions.members.first() || message.member).avatarURL);
	}
}