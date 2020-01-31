const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    message.delete();

    var id = user.id;
    var avatar = user.avatarURL;

    const botEmbed = new discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor(mainColor)
        .setAuthor(`${user.username}#${user.discriminator}`, `${avatar}`)
        .addField("**Joind Server**", `${moment.utc(message.member.joinedAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**Joind Discord**", `${moment.utc(user.createdAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .setTimestamp()
        .setFooter(`${id}`);

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "ik"
}