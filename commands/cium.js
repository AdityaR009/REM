const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'cium',
  description: 'Mencium member lain dengan gaya anime 😘',
  async execute(message, args) {
    const target = message.mentions.users.first();

    if (!target) {
      return message.reply('Kamu harus mention seseorang untuk dicium! Contoh: `!cium @nama`');
    }

    try {
      const response = await fetch('https://api.waifu.pics/sfw/kiss');
      const data = await response.json();

      const embed = new EmbedBuilder()
        .setTitle(`${message.author.username} mencium ${target.username} 😘`)
        .setImage(data.url)
        .setColor(0xff69b4)
        .setFooter({ text: 'Sumber: waifu.pics' })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Gagal mengambil gambar ciuman:', error);
      message.reply('❌ Gagal mengambil animasi ciuman.');
    }
  },
};