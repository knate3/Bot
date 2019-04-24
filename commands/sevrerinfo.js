module.exports = {
	name: 'serverinfo',
	description: 'Get info on the server your in!',
	usage: 'serverinfo',
	aliases: ['si'],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 1,
	execute(client, message) {
		var guild = message.guild;
		message.channel.send(`**Serverinfo**\n\n**>**Name: ${guild.name}\n**>**Count: ${guild.users.size}\n**>**Owner: ${guild.owner}`)
	}
}