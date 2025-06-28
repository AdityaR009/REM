const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'hentai',
  description: 'Mengirim gambar waifu NSFW dari waifu.pics (hanya bisa di channel NSFW)',
  async execute(message, args) {
    // Cek apakah channel ini NSFW
    if (!message.channel.nsfw) {
      return message.reply('❌ Perintah ini hanya bisa digunakan di channel NSFW.');
    }

    try {
      const response = await fetch('https://api.waifu.pics/nsfw/waifu');
      const data = await response.json();

      const embed = new EmbedBuilder()
        .setTitle('LESGOO 🔥')
        .setImage(data.url)
        .setColor(0xFF0000)
        .setFooter({ text: 'Sumber: waifu.pics' })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Gagal mengambil gambar NSFW:', error);
      message.reply('❌ Tidak bisa mengambil gambar NSFW.');
    }
  },
};