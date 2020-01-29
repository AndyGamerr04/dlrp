const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    message.delete();

    const botEmbed = new discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor(mainColor)
        .addField("**Name**", `${user.username}#${user.discriminator}`, true)
        .addField("**ID**", user.id, true)
        .addBlankField()
        .addField("**JoindAt**", `${moment.utc(message.member.joinedAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**CreatedAt**", `${moment.utc(user.createdAt).format("DD MMM YYYY, HH:mm:ss")}`, true)

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "ik"
}