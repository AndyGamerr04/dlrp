const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    const avatarEmbed = new discord.RichEmbed()
        .setColor("950ceb")
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);

}
module.exports.help = {
    name: "avatar"
}