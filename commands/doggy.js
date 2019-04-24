module.exports = {
	name: 'doggy',
	description: 'Give someone a puppy!',
	usage: 'doogy',
	aliases: ['dog'],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 3,
	execute(client, message) {
		var pig = ('../images/dog.jpg');
		message.channel.send({
			files: [{
				attachment: pig
			}]
		});


	}
}