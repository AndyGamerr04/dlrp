const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    message.delete();

    const botEmbed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor("950ceb")
        .addField("**Name**", `${user.username}#${user.discriminator}`, true)
        .addField("**ID**", user.id, true)
        .addBlankField()
        .addField("**CreatedAt**", `${moment.utc(user.createdAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**JoindAt**", `${moment.utc(user.joindAt).format("DD MMM YYYY, HH:mm:ss")}`, true)

    return message.channel.send(botEmbed).then(msg => msg.delete(20000));

}

module.exports.help = {
    name: "pinfo"
}