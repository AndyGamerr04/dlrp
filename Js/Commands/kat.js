const discord = require("discord.js");
const superAgent = require("superagent");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    var cat;

    cat = await superAgent
        .get("http://aws.random.cat/meow");

    while (cat.body.file.endsWith(".webm") || cat.body.file.endsWith(".mp4")) {
        cat = await superAgent
            .get("http://aws.random.cat/meow");
    }

    var embed = new discord.RichEmbed()
        .setColor(mainColor)
        .setTitle("kat :cat:")
        .setImage(cat.body.file);

    message.channel.send(embed);

}

module.exports.help = {
    name: "kat"
}