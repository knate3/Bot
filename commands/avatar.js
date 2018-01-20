module.exports = {
	name: 'avatar',
	guildOnly: true,
	description: 'Get someones avatar.',
	args: true,
	execute(client, message, args) {


var user = message.mentions.users.first() || message.author || message.guild.members.get(result);
message.channel.send(user.avatarURL);
	}}