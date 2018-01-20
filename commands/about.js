module.exports = {
	name: 'about',
	description: 'About me!',
	args: true,
	execute(client, message, args) {

const { prefix, token, ownerID } = require('../config.json');
message.channel.send(`H-Hey there i'm ${client.user.username} i'm here to help you and make your server fun and awesome i was made by my dad(knate3#9781) and <@${ownerID}>`)
	}}