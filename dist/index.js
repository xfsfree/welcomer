  const { Client, Intents } = require('discord.js');
  const config = require('./tsconfig.json');
  const keep_alive = require('./keep_alive.js')
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_BANS
    ],
  });

  client.once('ready', () => {
    console.log(`Bot olarak giriş yapıldı: ${client.user.tag}`);
    client.user.setActivity(`.help | its_aa`, { type: "STREAMING", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
  });

  client.on('guildMemberAdd', (member) => {
    const channelId = '1212718636574449694'; // Hoş geldin mesajının gönderileceği kanal ID'si
    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      channel.send(`Hey <@${member.user.id}>, welcome to **Undo**!`);
    } else {
      console.log('Belirtilen kanal bulunamadı!');
    }

    // Kullanıcının DM kutusuna 3 saniye sonra "merhaba" mesajı gönderme
    setTimeout(() => {
        member.send(`Hey ${member.displayName}, you will automatically get access to https://discord.com/channels/1212715851808243722/1215111222500921405 once you put discоrd.gg/gamertags in your status. https://cdn.discordapp.com/attachments/1217553549576245356/1233422143576866836/1.png?ex=662d0962&is=662bb7e2&hm=6a77a4be5c731e8817c7e53de10c15df0d7060be21ac9d096be5f09ab13d08f2& `); 
    }, 8000);
 // 3000 milisaniye = 3 saniye
  });

  client.on('guildMemberRemove', (member) => {
    const channelId = '1212718652462469130'; // Üye çıkış yaptığında mesajın gönderileceği kanal ID'si
    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      channel.send(`<@${member.user.id}> just left the server`);
    } else {
      console.log('Belirtilen kanal bulunamadı!');
    }
  });

  client.login(process.env.token || Secrets.TOKEN); // Botunuzun token'ini buraya ekleyin
