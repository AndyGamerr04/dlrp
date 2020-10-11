const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async(bot, message, args) => {

    message.delete();

    if (!message.member.roles.find(r => r.name === "Anime Fan")) {

        var err = new discord.RichEmbed()

        .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(4000));

    }

    var hen;

    hen = await superAgent
        .get("https://nekobot.xyz/api/image?type=hentai");

    var embed = new discord.RichEmbed()

    .setColor("2C2F33")
        .setDescription("**Hentai** :underage:")
        .setImage(hen.body.message);

    message.channel.send(embed).then(msg => msg.delete(5000));

}

module.exports.help = {
    name: "hentaixd"
}