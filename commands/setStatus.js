module.exports = {
  name: 'setStatus',
  description: 'Set my status.',
  args: true,
  execute(client, message, args) {
  const status = {
  1: "online",
  2: "idle",
  3: "dnd",
  4: "offline"
};
  //status[member.user.presence.status]
      if (!agrs) {
      args = '1';
    }
    client.user.setStatus(status[args]).then(()=>{message.channel.send(`I have set my status to: ${status[args]}`)})



  }}