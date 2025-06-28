module.exports = {
  name: 'ping',
  description: 'Balas dengan pong!',
  execute(message, args) {
    message.channel.send('Pong!');
  },
};