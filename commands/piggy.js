module.exports = {
	name: 'piggy',
	description: 'Give someone a pig!',
	usage: 'piggy',
	aliases: ['pig', 'hog'],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 2,
	execute(client, message) {
		message.channel.send({
			files: [{
				attachment: ('../images/piggy.jpg')
			}]
		});


	}
}