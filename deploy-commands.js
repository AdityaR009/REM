const { REST, Routes } = require('discord.js');
const { readdirSync } = require('fs');
const path = require('node:path');
require('dotenv').config();

const commands = [];
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Mengirim slash command...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('Berhasil mengirim command!');
  } catch (error) {
    console.error(error);
  }
})();