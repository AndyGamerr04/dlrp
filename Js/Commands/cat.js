const discord = require("discord.js");
const superAgent = require("superagent");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    var cat;

    cat = await superAgent
        .get("http://aws.random.cat/meow");

    while (cat.body.url.endsWith(".webm") || cat.body.url.endsWith(".mp4")) {
        cat = await superAgent
            .get("http://aws.random.cat/meow");
    }

    var embed = new discord.RichEmbed()
        .setColor(mainColor)
        .setTitle("**Hond** :cat:")
        .setImage(cat.body.url);

    message.channel.send(embed);

}

module.exports.help = {
    name: "cat"
}