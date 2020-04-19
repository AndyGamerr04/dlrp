const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    //if (!message.member.roles.find(r => r.name === "Staff")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("Er is iets fout gegaan! 😕", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var embed = new discord.RichEmbed()

        .setColor("#00ff11")

        .setTitle('HometownRP Reglement')

        .setURL('https://discord.gg/q8fB9QF')

        .setThumbnail('https://i.imgur.com/IBpr3Ow.png')

    message.channel.send(embed)

    var embed2 = new discord.RichEmbed()

        .setColor("#00ff11")

        .setDescription('**Zwaar wapen**\nWapen uittrekken als iemand je gewapend in de gaten houdt.\n\n**Geen RDM**\n(Random Death Match) Iemand zonder reden vermoorden.\n\n**Geen VDM**\n(Random Vehicle Deathmatch) Iemand dood rijden met een auto.\n\n**Geen SpawnKill**\nIemand vermoorden op het moment dat ze verbinden.\n\n**Geen FreeShot**\nIemand zonder reden schieten.')

    message.channel.send(embed2)


    var embed3 = new discord.RichEmbed()

        .setColor("#00ff11")

        .setDescription('**Zwaar wapen**\nWapen uittrekken als iemand je gewapend in de gaten houdt.\n\n**Geen RDM**\n(Random Death Match) Iemand zonder reden vermoorden.\n\n**Geen VDM**\n(Random Vehicle Deathmatch) Iemand dood rijden met een auto.\n\n**Geen SpawnKill**\nIemand vermoorden op het moment dat ze verbinden.\n\n**Geen FreeShot**\nIemand zonder reden schieten.')

    message.channel.send(embed3)


    /*var embed4 = new discord.RichEmbed()

        .setColor("#00ff11")

        //.setAuthor('Het overtreden van regels leid tot staffzaak')

        //.setTitle('HometownRP Reglement')

        //.setURL('https://discord.gg/q8fB9QF')

        .setThumbnail('https://i.imgur.com/IBpr3Ow.png')

        .setDescription('**Zwaar wapen**\nWapen uittrekken als iemand je gewapend in de gaten houdt.\n\n**Geen RDM**\n(Random Death Match) Iemand zonder reden vermoorden.\n\n**Geen VDM**\n(Random Vehicle Deathmatch) Iemand dood rijden met een auto.\n\n**Geen SpawnKill**\nIemand vermoorden op het moment dat ze verbinden.\n\n**Geen FreeShot**\nIemand zonder reden schieten.')

        .setFooter('Copyright HometownRP 2020 ©');

    message.channel.send(embed4)*/


}

module.exports.help = {
    name: "rules"
}