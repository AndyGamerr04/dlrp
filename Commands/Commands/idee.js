const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");

var mainColor = botConfig.mainColor;

var errColor = botConfig.errColor;

var errMessage = botConfig.errMessage;

module.exports.run = async (bot, message, args) => {

    message.delete();

    /*if (!message.member.roles.find(r => r.name === "Tester")) {
        var err = new discord.RichEmbed()
            .setColor(errColor)
            .addField(`${errMessage}`, "*You don't have permission.*");
        return message.channel.send(err).then(msg => msg.delete(8000));
    }*/

    var idee = args.join(" ");

    //var servername = message.guild.name;

    var user = message.author;

    if (!idee) {

        var ideeErr = new discord.RichEmbed()

            .setColor(errColor)
            .addField(`${errMessage}`, "*You didn't say your idea.*");

        return message.channel.send(ideeErr);

    }

    var ideeEmbed = new discord.RichEmbed()

        .setColor(mainColor)
        .setDescription(`💡 **Idea request from ${user}**\n\n${idee}`)
    //.setFooter(`${servername} | ${moment.utc(message.createdAt).format("DD MMM YYYY, HH:mm:ss")}`);

    message.channel.send(ideeEmbed).then(embedMessage => {

        embedMessage.react('👍');
        embedMessage.react('👎');

    });

}

module.exports.help = {
    name: "idea"
}