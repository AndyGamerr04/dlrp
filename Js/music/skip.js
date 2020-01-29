const discord = require("discord.js");
 
module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("Er is geen muziek aan het spelen op dit moment.");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry je zit niet in een zelfde kanaal als de bot");
 
    var amountUsers = message.member.voiceChannel.members.size;
 
    var amountSkip = Math.ceil(amountUsers / 30);
 
    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];
 
    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry je hebt al eens gevote. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
    guildIDData.queue[0].voteSkips.push(message.member.id);
 
    ops.active.set(message.guild.id, guildIDData);
 
    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {
 
        message.channel.send("Opweg naar het volgend liedje");
 
        return guildIDData.dispatcher.emit("end");
 
    }
 
    message.channel.send(`Tegevoegd van skip aanvraag. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
}
 
module.exports.help = {
    name: "skip",
    description: "Skip een liedje"
}