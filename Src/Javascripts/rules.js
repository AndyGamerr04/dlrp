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

        .setAuthor('Het overtreden van regels leid tot staffzaak')

        .setTitle('HometownRP Reglement')

        .setURL('https://discord.gg/q8fB9QF')

        //.setThumbnail('https://i.imgur.com/IBpr3Ow.png')

        .setDescription('**Zwaar wapen**\nGeen zwaar wapen uittrekken als iemand je gewapend in de gaten houdt.\n\n**RDM**\nGeen RDM (Random Death Match) - Iemand zonder reden vermoorden.\n\n**VDM**\nGeen VDM (Random Vehicle Deathmatch) - Iemand dood rijden met een auto.\n\n**SpawnKill**\nGeen SpawnKill - Iemand vermoorden op het moment dat ze verbinden.\n\n**FreeShot**\nGeen FreeShot - Iemand zonder reden schieten.')

        .setFooter('Copyright HometownRP 2020 ©');

    message.channel.send(embed)

}

module.exports.help = {
    name: "rules"
}