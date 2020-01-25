const Discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    var fox;

    fox = await superAgent
        .get("https://randomfox.ca/floof/");

    var embed = new Discord.RichEmbed()
        .setColor("950ceb")
        .setTitle("Foxy :fox:")
        .setImage(fox.body.image);

    message.channel.send(embed);

}

module.exports.help = {
    name: "fox"
}