const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    if (!message.member.roles.find(r => r.name === "Developer")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("Er is iets fout gegaan! 😕", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var embed = new discord.RichEmbed()
        .setColor("#282b30")
        .setTitle('HometownRP Reglement 1')
        .setURL('https://discord.gg/q8fB9QF')
        .setDescription('**Waarschuwingen**\n\n> 3 waarschuwingen is 1 dag ban.\n> 4 waarschuwingen is 1 week ban.\n> 5 waarschuwingen is 1 maand ban.\n> 6 waarschuwingen is een permanente ban.\n\n text...')
        .setThumbnail('https://i.imgur.com/IBpr3Ow.png')

    message.channel.send(embed)

    var embed2 = new discord.RichEmbed()
        .setColor("#1e2124")
        .setTitle('HometownRP 2')
        .setURL('https://discord.gg/q8fB9QF')
        .setDescription('**Waarschuwingen**\n\n> 3 waarschuwingen is 1 dag ban.\n> 4 waarschuwingen is 1 week ban.\n> 5 waarschuwingen is 1 maand ban.\n> 6 waarschuwingen is een permanente ban.\n\n text...')
        .setThumbnail('https://i.imgur.com/IBpr3Ow.png')

    message.channel.send(embed2)

}

module.exports.help = {
    name: "r"
}