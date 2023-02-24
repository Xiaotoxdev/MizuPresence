const { Client } = require('discord.js-selfbot-v13');
const { RichPresence } = require('discord.js-selfbot-rpc');
const colors = require('colors')
const config = require('./config.js');

const client = new Client({
    checkUpdate: false,
})

client.on('ready', async () => {
    const applicationId = config.botId;

    const presence = new RichPresence()
        .setStatus(config.status)
        .setName(config.name)
        .setType(config.type)
        .setApplicationId(applicationId)
        .setDetails(config.details)
        .setState(config.states)
        .setAssetsLargeImage(config.largeImage)
        .setTimestamp()

        client.user.setPresence(presence.toData())
        console.log(`[+]`.bold.yellow + ` Waiting for connection ...`);
        console.log(`${client.user.tag} Is well connected !`.bold.green);
})

client.login(config.token)