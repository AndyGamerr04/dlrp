const discord = require("discord.js");
const superAgent = require("superagent");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    var fox;

    fox = await superAgent
        .get("https://randomfox.ca/floof/");

    var embed = new discord.RichEmbed()

        .setColor(mainColor)
        .setTitle("**Vosje** :fox:")
        .setImage(fox.body.image);

    message.channel.send(embed);

}

module.exports.help = {
    name: "vosje"
}