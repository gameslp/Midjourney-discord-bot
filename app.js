const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('message', message => {
    let wiadomosc = message.content.split(' ');
    if (wiadomosc[0] === '!send') {
      let channel = client.channels.cache.get("NEWBIES CHANNEL ID");
      channel.sendSlash("MIDJOURNEY BOT ID",'imagine', wiadomosc.slice(1,wiadomosc.length).join(" "));
    }
    if (message.mentions.has("YOUR BOT ID")){
        if (message.attachments.size > 0) {
            client.channels.cache.get("CHANNEL FOR RESPONSE").send(message.attachments.first().url);
        }    
    }
    
});


client.login("token");
