const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!message.member.roles.find(r => r.name === "Benny's Original")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(4000));

    }

    var splitser = "//";

    message.delete();

    if (args[0] == null) {

        var useMesagge = new discord.RichEmbed()

            .setTitle("Use:")
            .setColor("ef7f1b")
            .setDescription(`!bc **TITLE** ${splitser} **MESSAGE** ${splitser} **COLOR** *#ef7f1b* ${splitser} **CHANNEL**`);

        return message.channel.send(useMesagge).then(msg => msg.delete(20000));

    }

    args = args.join(" ").split(splitser);

    var options = {

        verkoper: args[0] || "Notification",
        koper: args[1] || "No content specified",
        prijs: args[2] || "No content specified",
        nummerplaat: args[3] || "No content specified"

    }

    var announcer = message.author;

    const user = message.mentions.users.first() || message.author;

    var announcementEmbed = new discord.RichEmbed()

        .setTitle("Benny's Original")

        .setColor("#ffc32d")

        .setDescription(`**Naam van de verkoper:** ${options.verkoper} \n\n**Naam van de koper:** ${options.koper} \n\n ${options.prijs}\n\n ${options.nummerplaat} `)

        .setFooter(`Mededeling van ${user.username}#${user.discriminator}`)

    var announcementChannel = message.guild.channels.find(`name`, "verkochte-autos");
    if (!announcementChannel) return message.channel.send("Invalid Channel");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "va"
}