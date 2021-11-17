module.exports = (client, message) => {

    if (message.author.bot) return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    const guildQueue = client.player.getQueue(message.guild.id);

    if (!cmd) return;
  
    cmd.run(client, message, args, guildQueue);
  };