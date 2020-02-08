const discord = require("discord.js");
const moment = require("moment");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    message.delete();

    var idee = args.join(" ");

    var user = message.author;

    if (!idee) return message.channel.send("!idee (idee + link)");

    var ideeEmbed = new discord.RichEmbed()
        .setColor(mainColor)
        .setDescription(`💡 **Idee aanvraag van ${user}**\n\n${idee}`)
        .setFooter(`Dutch Life Roleplay | ${moment.utc(message.createdAt).format("DD MMM YYYY, HH:mm:ss")}`)

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