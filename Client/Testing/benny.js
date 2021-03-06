const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    if (!message.member.roles.find(r => r.name === "Benny's Original")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(4000));

    }

    var splitser = "//";

    if (args[0] == null) {

        var useMesagge = new discord.RichEmbed()

            .setColor("2C2F33")
            .setDescription(`!va **VERKOPER** ${splitser} **KOPER** ${splitser} **MERK** ${splitser} **NUMMERPLAAT** ${splitser} **PRIJS** ${splitser} **BESCHRIJVING**`);

        return message.channel.send(useMesagge).then(msg => msg.delete(25000));

    }

    args = args.join(" ").split(splitser);

    var options = {

        verkoper: args[0] || "No content specified",
        koper: args[1] || "No content specified",
        merk: args[2] || "No content specified",
        nummerplaat: args[3] || "No content specified",
        prijs: args[4] || "No content specified",
        beschrijving: args[5] || "Geen beschrijving... "

    }

    var announcementEmbed = new discord.RichEmbed()

        .setColor("#8c2226")

        .setTitle("**Benny's Original**  **•**MOTORWORKS**•**")

        .setDescription(`Verkoper: **${options.verkoper}**\nKoper: **${options.koper}**\n\n\n`)

        .setThumbnail('https://i.imgur.com/LwPKsSo.png')

        .addField('Nummerplaat', `**${options.nummerplaat}**`, true)
        .addField('Merk', `**${options.merk}**`, false)
        .addField('Prijs', `**${options.prijs}€**`, true)

        .setFooter(`${options.beschrijving}`)

    var announcementChannel = message.guild.channels.find(`name`, "verkochte-autos");

    if (!announcementChannel) return message.channel.send("Invalid Channel");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "va"
}