const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (message) => {

    const user = message.mentions.users.first() || message.author;

    message.delete();

    const botEmbed = new discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor("950ceb")
        .addField("**Name**", `${user.username}#${user.discriminator}`, true)
        .addField("**ID**", user.id, true)
        .addBlankField()
        .addField("**JoindAt**", `${moment.utc(user.joinedAt).format("DD MMM YYYY, HH:mm:ss")}`, true)
        .addField("**CreatedAt**", `${moment.utc(user.createdAt).format("DD MMM YYYY, HH:mm:ss")}`, true)

    return message.channel.send(botEmbed).then(msg => msg.delete(20000));

}

module.exports.help = {
    name: "ik"
}