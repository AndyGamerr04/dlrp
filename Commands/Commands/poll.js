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
        .addField(`Ingezonden door: ${message.author}`);

    var ideeChannel = message.guild.channels.find(`name`, "💡poll-aanvraag");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");

    ideeChannel.send(ideeEmbed).then(message => {
        message.react('👍');
        message.react('🤷‍♂️');
        message.react('👎');
    });

    message.delete();

}

module.exports.help = {
    name: "poll"
}