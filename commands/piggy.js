module.exports = {
	name: 'piggy',
	description: 'Give someone a pig!',
	args: true,
	execute(client, message, args) {
	var pig = ('../images/piggy.jpg');
	message.channel.send({ files: [{ attachment: pig}] });


}}