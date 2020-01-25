const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    var idee = args.join(" ");

    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");

    var ideeEmbed = new discord.RichEmbed()
        .setColor("#00FF00")
        .addField("Idee: ", idee)
        .setTimestamp()
        .setFooter('💡 Idee aanvraag van: ', message.author, 'https://i.imgur.com/wSTFkRM.png');

    var ideeChannel = message.guild.channels.find(`name`, "💡idee-aanvraag");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}

module.exports.help = {
    name: "idee"
}