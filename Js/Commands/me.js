const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    message.delete().then(msg => msg.delete(80000));

    const botEmbed = new discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor(mainColor)
        .setAuthor(`${user.username}#${user.discriminator}`, `${user.avatarURL}`)
        .addField("**Joind Server At**", `${moment.utc(message.member.joinedAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**Joind Discord At**", `${moment.utc(user.createdAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .setTimestamp()
        .setFooter(`User ID: ${user.id}`);

    return message.channel.send(botEmbed).then(msg => msg.delete(80000));

}

module.exports.help = {
    name: "me"
}