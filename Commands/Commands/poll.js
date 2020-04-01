const discord = require("discord.js");
const botConfig = require("../../botconfig.json");

var mainColor = botConfig.mainColor;
var serverName = botConfig.serverName;

module.exports.run = async (bot, message, args) => {

    var idee = args.join(" ");

    var user = message.author;

    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");

    var ideeEmbed = new discord.RichEmbed()

        .setColor(mainColor)
        .setDescription(`${serverName} **poll aanvraag | @everyone **\n\n${idee}`)
        .setFooter(`Ingezonden door: ${user}`);

    var ideeChannel = message.guild.channels.find(`name`, "💡poll-aanvraag");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");

    ideeChannel.send(ideeEmbed).then(message => {
        message.react('🍎')
            .then(() => message.react('671376052408287235'))
            .then(() => message.react('671374402990112768'))
            .catch(() => console.error('Een van de emoji reageerde niet.'));
    });

    message.delete();

}

module.exports.help = {
    name: "poll"
}