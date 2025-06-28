const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'rem',
  description: 'Memperkenalkan diri bot kepada pengguna.',
  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setTitle(' Hai! Kenalin aku REM!')
      .setDescription(`Halo ${message.author.username}! Aku adalah Istri Aditya yang siap membantu kamu di server ini.`)
      .setColor(0x00bfff)
      .addFields(
        { name: '📌 Prefix', value: '`!`', inline: true },
        { name: '🧠 Fitur', value: '• Command gambar waifu\n• Sambutan member baru\n• Interaksi anime: !cium, !pukul\n• Dan banyak lagi!' },
        { name: '👨‍💻 Developer', value: 'Dibuat oleh Aditya R', inline: false }
      )
      .setFooter({ text: 'Terima kasih sudah memakai aku!' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};