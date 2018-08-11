const Discord = require('discord.js')
const client = new Discord.Client()
const randomChannelName = require('./channelName.js')

// Get env environment vars
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})
*/

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if (oldUserChannel && newUserChannel) {
    // User Joins a voice channel
    const guild = newMember.guild
    const afkChannel = guild.afkChannel
    if (newUserChannel === afkChannel) {
      console.log('Mixup channel name')
      afkChannel
        .setName(randomChannelName())
        .catch(error => console.error(error))
    }
  }
})

const token = process.env.DISCORDTOKEN
client.login(token)
