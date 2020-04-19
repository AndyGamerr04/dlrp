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

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .setFooter("!me + @naam  |  om jouw profiel met de mensen te delen.");

    return message.channel.send(botEmbed).then(message => {
        message.react('👍');

        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        } else {
            message.reply('you reacted with a thumbs down.');
        }
    });

};

module.exports.help = {
    name: "rules"
}