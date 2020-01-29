const discord = require("discord.js");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first() || message.author;

    const avatarEmbed = new discord.RichEmbed()
        .setColor(mainColor)
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);

}
module.exports.help = {
    name: "avatar"
}