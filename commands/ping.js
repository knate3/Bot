module.exports = {
	name: 'ping',
	description: 'pong',
	usage: 'ping',
	aliases: [],
	args: false,
	owner: false,
	guildOnly: true,
	cooldown: 1,
	execute(client, message) {

		message.channel.send('Pong...').then((msg) => {
			msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);


		});
	}
}