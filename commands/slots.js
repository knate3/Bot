module.exports = {
	name: 'slots',
	description: 'Do the the slots!',
	usage: 'slots',
	aliases: [],
	args: false,
	owner: false,
	guildOnly: false,
	cooldown: 3,
	execute(client, message) {

		var emojis = [":apple:", ":tangerine:", ":pear:", ":lemon:", ":watermelon:", ":grapes:", ":strawberry:", ":cherries:", ":heart:", ":100:", ":seven:", ":gem:", ":moneybag:"];
		var a = emojis[Math.floor(Math.random() * emojis.length)]
		var b = emojis[Math.floor(Math.random() * emojis.length)]
		var c = emojis[Math.floor(Math.random() * emojis.length)]
		message.reply(`**${message.author.username}** rolled the slots...\n**[ ${a} ${b} ${c} ]**`)

	}
}