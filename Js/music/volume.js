module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("Er zijn geen liedjes aan het afspelen op dit moment.");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry je bent niet in het zelfde kanaal als de bot");
 
    if (isNaN(args[0]) || args[0] > 150 || args[0] < 0) return message.channel.send("Gelieve een nummer tussen 0 - 150 op te geven.");
 
    guildIDData.dispatcher.setVolume(args[0] / 100);
 
    message.channel.send(`Het volume succesvol aangepast van  ${guildIDData.queue[0].songTitle} naar ${args[0]}`);
 
}
 
module.exports.help = {
    name: "volume",
    description: "Verander het volume van de bot"
}