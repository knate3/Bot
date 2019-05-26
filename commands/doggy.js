module.exports = {
	name: 'doggy',
	description: 'Give someone a image of a dog!',
	usage: 'doogy',
	aliases: ['dog'],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 3,
	execute(client, message) {
		message.channel.send({
			files: [{
				attachment: ('../images/dog.jpg')
			}]
		});


	}
}