module.exports = {
  name: 'setStatus',
  description: 'Set my status.',
  usage: 'setStatus <1, 2 or 3>',
	aliases: ['setstatus'],
	args: true,
	owner: true,
	guildOnly: false,
	cooldown: 120, // Discord has a ratelimit don't change.
  execute(client, message, args) {
    args = args || '1';
    const status = {
      1: "online",
      2: "idle",
      3: "dnd",
      4: "offline"
    };
    client.user.setStatus(status[args]).then(() => {
      message.reply(`I have set my status to: ${status[args]}`)
    })



  }
}