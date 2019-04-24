const Discord = require('discord.js');
module.exports = {
  name: 'say',
  description: 'Have the bot say something.',
  usage: 'say <#channel> | <color>(red, green, yellow, purple, blue) | <something you wanna say> | <something you wanna say>',
  aliases: ['embed'],
	args: tue,
	owner: true,
	guildOnly: true,
	cooldown: 9,
  execute(client, message, args) {

    const options = args.join(' ');
    const list = options.split('|');
    const colors = {
      red: 0xff0000,
      green: 0x21ff00,
      yellow: 0xfff600,
      purple: 0x9000ff,
      blue: 0x003fff
    };

    if (!list[0] || !list[1] || !list[2] || !list[3]) {
      var Error = new Discord.RichEmbed()
        .setColor(0xff0000)
        .addField('Error', 'Put something to say, `say <#channel> | <color> | <stuff> | <stuff>`')
      return message.channel.send({
        Error
      });
    }

    var sayMsg = new Discord.RichEmbed()
      .setColor(colors[list[1].trim()])
      .addField(list[2], list[3])
    message.mentions.channels.first().send({
      sayMsg
    });



  }
}