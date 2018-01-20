module.exports = {
	name: 'love',
	description: 'Give someone love!',
	args: true,
	execute(client, message, args) {
var user = message.mentions.users.first() || message.author;
if(user.id === client.user.id) return message.channel.send('Nahhh boiii diss gay!')
	message.channel.send('mmm give me some of that love boooboo bear ' + user)

}}