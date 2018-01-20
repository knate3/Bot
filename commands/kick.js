module.exports = {
	name: 'kick',
	description: 'Kick a user lol for real..',
	usage: 'kick <@user>',
	args: true,
	owner: true,
		guildOnly: true,
	execute(client, message, args) {
	
	if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")){

			if(message.mentions.users.size === 0) return message.channel.send('Plz mention someone!')
var user = message.guild.member(message.mentions.users.first());
if(!user) return message.reply('That user is not real!')
if(user.id === message.author.id) return message.channel.send('You can not kick yourself!');
if(user.id === client.user.id) return message.channel.send("I can not kick myself");
 if (user.highestRole.position >= message.guild.me.highestRole.position){
return message.channel.send('That users role greater or = to my role.')


}user.kick().then(member=>{message.channel.send('I have kicked user: ' + user)})
}else{message.channel.send('I\'m unable to kick this member i do not have the following permissions `KICK_MEMBERS`');}
}
}