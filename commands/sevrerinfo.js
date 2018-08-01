module.exports = {
	name:'serverinfo',
	description: 'Get info on the server your in!',
	usage: 'serverinfo',
	args: true,
	owner: true,
    guildOnly: true,
        execute(client, message, args) {
	var guild = message.guild;
	message.channel.send(`**Serverinfo**\n\n**>**Name: ${guild.name}\n**>**Count: ${guild.users.size}\n**>**Owner: ${guild.owner}`)
}
}
