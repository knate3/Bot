module.exports = {
  name: 'help',
  description: 'Get a list of commands.',
  usage: "help [command-name]",
  aliases: ['commands', 'cmds'],
  args: true,
  owner: false,
  guildOnly: true,
  cooldown: 3,
  execute(client, message, args) {
    const {
      prefix,
    } = require('../config.json');

    if (!args[0]) {
      const commandNames = Array.from(client.commands.keys());
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      message.channel.send(`= **Command List** =\n\n[**Use ${prefix}help <commandname> for details**]\n\n\`${client.commands.map(c => `${prefix}${c.name}${' '.repeat(longest - c.name.length)} | ${c.description}`).join('\n')}\``);
    } else {
      let command = args[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
        message.channel.send(`= ${command.name} = \n${command.description}\nusage:${command.usage}`);
      }
    }
  }
}