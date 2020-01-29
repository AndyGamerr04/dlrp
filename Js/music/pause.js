const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, ops) => {

    var guildIDData = ops.active.get(message.guild.id);

    if (!guildIDData) {

        var musicEmbed = new Discord.RichEmbed()

            .setColor("0x333333")
            .addField("**Error**", "**There are no songs playing at the moment.**");

        return message.channel.send(musicEmbed);
    }

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {

        var music2Embed = new Discord.RichEmbed()

            .setColor("0x333333")
            .addField("**Error**", "**Sorry you're not in the same channel as the bot.**");

        return message.channel.send(music2Embed);
    }

    if (guildIDData.dispatcher.paused) {

        var music3Embed = new Discord.RichEmbed()

            .setColor("0x333333")
            .addField("**Error**", "**The music is already paused.**");

        return message.channel.send(music3Embed);
    }

    guildIDData.dispatcher.pause();

    var music4Embed = new Discord.RichEmbed()

        .setColor("ef7f1b")
        .setAuthor(`Successfully paused: ${guildIDData.queue[0].songTitle}`);

    message.channel.send(music4Embed);

}

module.exports.help = {
    name: "pause"
}