module.exports = {
	name: 'slots',
	description: 'Do the the slots!',
	args: true,
	execute(client, message, args) {

var emojis = [":apple:", ":tangerine:", ":pear:", ":lemon:", ":watermelon:", ":grapes:", ":strawberry:", ":cherries:", ":heart:", ":100:", ":seven:", ":gem:",  ":moneybag:"];
var a = emojis[Math.floor(Math.random() * emojis.length)]
var b = emojis[Math.floor(Math.random() * emojis.length)]
var c = emojis[Math.floor(Math.random() * emojis.length)]
message.channel.send(`**${message.author.username}** rolled the slots...\n**[ ${a} ${b} ${c} ]**`)

	}}