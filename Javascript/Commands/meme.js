const Discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    var meme;

    meme = await superAgent
        .get("https://some-random-api.ml/meme");

    var embed = new Discord.RichEmbed()
        .setColor("950ceb")
        .setTitle(":regional_indicator_m: :regional_indicator_e: :regional_indicator_m: :regional_indicator_e: ")
        .setImage(meme.body.image);

    message.channel.send(embed);

}

module.exports.help = {
    name: "meme"
}