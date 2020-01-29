const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) {
        
        var musicEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("**Gelieve met een spraak kanaal te verbinden.**");

        return message.channel.send(musicEmbed);
    }

    if (!message.guild.me.voiceChannel) { 

        var music2Embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("**Sorry de bot is niet met een spraak kanaal verbonden.**");

        return message.channel.send(music2Embed);
    }

    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) {

        var music3Embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("**Sorry je bent niet met hetzelfde kanaal verbonden.**");
        
        return message.channel.send(music3Embed);
    }

    message.guild.me.voiceChannel.leave();

}

module.exports.help = {
    name: "stop",
    description: "Laat de bot leaven van het kanaal."
}