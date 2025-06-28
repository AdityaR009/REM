const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Menampilkan semua command bot dalam dua halaman.',
  async execute(message, args) {
    const prefix = process.env.PREFIX || '!';

    // Halaman 1 – Command Umum & Interaksi
    const page1 = new EmbedBuilder()
      .setTitle('📘 Help Menu — Halaman 1/2')
      .setDescription('✨ Berikut daftar perintah umum & hiburan yang bisa kamu gunakan:')
      .setColor(0x1abc9c)
      .addFields(
        { name: '♪ ' + prefix + 'beatmap', value: 'Mencari Beatmap yang di buat Aditya', inline: true },
        { name: '👘 ' + prefix + 'skin', value: 'Mencari SKIN bertema NKRI.', inline: true },
        { name: '🖼️ ' + prefix + 'waifu', value: 'Mengirim gambar waifu random.', inline: true },
        { name: '💋 ' + prefix + 'cium @user', value: 'Mencium user lain dengan gaya anime.', inline: true },
        { name: '💢 ' + prefix + 'pukul @user', value: 'Memukul user lain dengan GIF lucu.', inline: true }
      )
      .setFooter({ text: 'Gunakan prefix "' + prefix + '" sebelum setiap perintah.' })
      .setTimestamp();

    // Halaman 2 – Command Informasi & Tambahan
    const page2 = new EmbedBuilder()
      .setTitle('📘 Help Menu — Halaman 2/2')
      .setDescription('🔧 Berikut command info, NSFW, dan lainnya:')
      .setColor(0x3498db)
      .addFields(
        { name: '🤖 ' + prefix + 'rem', value: 'Bot memperkenalkan dirinya.', inline: true },
        { name: '🔞 ' + prefix + 'hentai', value: 'Kirim gambar waifu NSFW (khusus channel NSFW).', inline: true },
        { name: '📘 ' + prefix + 'help', value: 'Menampilkan menu bantuan ini.', inline: true }
      )
      .setFooter({ text: 'Total halaman: 2 | Terima kasih telah menggunakan bot ini!' })
      .setTimestamp();

    // Kirim kedua embed
    await message.channel.send({ embeds: [page1] });
    await message.channel.send({ embeds: [page2] });
  },
};