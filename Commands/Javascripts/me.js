const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

    message.delete();

    const user = message.mentions.users.first() || message.author;

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .setDescription(`${user.username}#${user.discriminator}`)

        .addField("**De server gejoind op:**", `${moment.utc(message.member.joinedAt).format("DD MMM YYYY")}`, true)

        .addField("**Discord account gemaakt op:**", `${moment.utc(user.createdAt).format("DD MMM YYYY")}`, true)

        .setImage(user.avatarURL)

        .setFooter("!me + @naam  |  om jouw profiel met de mensen te delen.");

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "me"
}