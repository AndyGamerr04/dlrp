const discord = require("discord.js");
const botConfig = require("../../botconfig.json");

var mainColor = botConfig.mainColor;
var serverName = botConfig.serverName;

module.exports.run = async (bot, message, args) => {

    var idee = args.join(" ");

    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");

    var ideeEmbed = new discord.RichEmbed()

        .setColor(mainColor)
        .setDescription(`${serverName} **poll aanvraag | @everyone **\n\n${idee}`)
        .addField(`Ingezonden door: ? `);

    var ideeChannel = message.guild.channels.find(`name`, "💡poll-aanvraag");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");

    ideeChannel.send(ideeEmbed).then(message => {
        message.react('🍎')
            .then(() => message.react('🍊'))
            .then(() => message.react('🍇'))
            .catch(() => console.error('One of the emojis failed to react.'));
    });

    message.delete();

}

module.exports.help = {
    name: "poll"
}