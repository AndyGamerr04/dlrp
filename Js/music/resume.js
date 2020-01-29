module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("Er zijn geen liedjes aan het afspelen op dit moment.");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry je bent niet in het zelfde kanaal als de bot");
 
    if (!guildIDData.dispatcher.paused) return message.channel.send("De muziek is niet gepauzeerd.");
 
    guildIDData.dispatcher.resume();
 
    message.channel.send(`Succesvol gestart ${guildIDData.queue[0].songTitle}.`);
 
}
 
module.exports.help = {
    name: "resume",
    description: "Zet de muziek terug aan"
}