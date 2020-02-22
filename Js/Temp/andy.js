const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    message.delete();

    if (!message.member.roles.find(r => r.name === "weebs")) {

        var err = new discord.RichEmbed()
            .setColor("0x333333")
            .addField("**Error**", "*You don't have permission.*");

        return message.channel.send(err).then(msg => msg.delete(5000));

    }

    var ana;

    ana = await superAgent
        .get("https://nekos.life/api/v2/img/pussy");

    var embed = new discord.RichEmbed()
        .setColor("ef7f1b")
        .setTitle("**アンディ** :underage:")
        .setImage(ana.body.url);

    message.channel.send(embed).then(msg => msg.delete(4000));

}

module.exports.help = {
    name: "andy"
}