const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'waifu',
  description: 'Mengirim gambar waifu random dari waifu.pics dalam embed',
  async execute(message, args) {
    try {
      const response = await fetch('https://api.waifu.pics/sfw/waifu');
      const data = await response.json();

      const embed = new EmbedBuilder()
        .setTitle('DASAR WIBU 💖')
        .setImage(data.url)
        .setColor(0xFF69B4)
        .setFooter({ text: 'Sumber: waifu.pics' })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Gagal mengambil gambar waifu:', error);
      message.reply('❌ Tidak bisa mengambil gambar waifu.');
    }
  },
};