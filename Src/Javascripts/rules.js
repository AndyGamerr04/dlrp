const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    //if (!message.member.roles.find(r => r.name === "Staff")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var embed = new discord.RichEmbed()

        .setColor("#00ff11")

        .setTitle('HometownRP Reglement')

        .setAuthor(`Hometown Roleplay`, `${bot.user.avatarURL}`)

        .setDescription("_")

        .setFooter('Het overtreden van regels leid tot staffzaak');

    message.channel.send(embed)

}

module.exports.help = {
    name: "rules"
}