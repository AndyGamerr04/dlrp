const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, ops) => {

    var guildIDData = ops.active.get(message.guild.id);

    if (!guildIDData) {

        var musicEmbed = new Discord.RichEmbed()

            .setColor("0x333333")
            .addField("**Error**", "**There are no songs playing at the moment.**");

        return message.channel.send(musicEmbed);
    }

    var queue = guildIDData.queue;
    var nowPlaying = queue[0];

    var response = `**Nu aan het spelen:** *${nowPlaying.songTitle}* *** || *** **Aangevraagd door:** ${nowPlaying.requester}\n\n**Queue list:** \n`;

    for (var i = 1; i < queue.length; i++) {

        response += `**[${i}]** *${queue[i].songTitle}*\n`;

    }

    message.channel.send(response);

}

module.exports.help = {
    name: "q"
}
