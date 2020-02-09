const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

var newYork = moment.tz("2014-06-01 12:00", "America/New_York");
var nl = newYork.clone().tz("Europe/Amsterdam");

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    message.delete().then(msg => msg.delete(80000));

    const botEmbed = new discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor(mainColor)
        .setAuthor(`${user.username}#${user.discriminator}`, `${user.avatarURL}`)
        .addField("**Joind Server At**", `${moment.utc(message.member.joinedAt).tz(nl).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**Joind Discord At**", `${moment.utc(user.createdAt).tz(nl).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .setTimestamp()
        .setFooter(`User ID: ${user.id}`);
    return message.channel.send(botEmbed).then(msg => msg.delete(80000));

}

module.exports.help = {
    name: "me"
}