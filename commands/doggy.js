module.exports = {
	name: 'doggy',
	description: 'Give someone a puppy!',
	args: true,
	execute(client, message, args) {
	var pig = ('../images/dog.jpg');
	message.channel.send({ files: [{ attachment: pig}] });


}}