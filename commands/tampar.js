const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'tampar',
  description: 'Memukul member lain dengan gaya anime! 💥',
  async execute(message, args) {
    // Ambil mention user
    const target = message.mentions.users.first();

    if (!target) {
      return message.reply('Kamu harus mention seseorang untuk ditampar! Contoh: `!tampar @nama`');
    }

    try {
      const response = await fetch('https://api.waifu.pics/sfw/slap');
      const data = await response.json();

      const embed = new EmbedBuilder()
        .setTitle(`${message.author.username} menampar ${target.username}! 💢`)
        .setImage(data.url)
        .setColor(0xff0000)
        .setFooter({ text: 'Sumber: waifu.pics' })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Gagal mengambil GIF pukulan:', error);
      message.reply('❌ Gagal mengambil animasi pukulan.');
    }
  },
};