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

            .setColor("2C2F33")
            .setDescription(`!va **VERKOPER** ${splitser} **KOPER** ${splitser} **NEMMERPLAAT** ${splitser} **PRIJS**`);

        return message.channel.send(useMesagge).then(msg => msg.delete(20000));

    }

    args = args.join(" ").split(splitser);

    var options = {

        verkoper: args[0] || "No content specified",
        koper: args[1] || "No content specified",
        merk: args[2] || "No content specified",
        nummerplaat: args[3] || "No content specified",
        prijs: args[4] || "No content specified",

    }

    const user = message.mentions.users.first() || message.author;

    var announcementEmbed = new discord.RichEmbed()

        .setTitle("**Benny's Original** | Beste Garage in Hometown RP")

        .setColor("#194576")

        //.setThumbnail('SERVER LOGO')
        .setThumbnail('https://i.imgur.com/LwPKsSo.png')

        .addField('Koper', `**${options.koper}**`, true)
        .addField('Verkoper', `**${options.verkoper}**`, true)
        .addBlankField()
        .addField('Nummerplaat', `**${options.nummerplaat}**`, true)
        .addField('Merk', `**${options.merk}**`, true)
        .addField('Prijs', `**${options.prijs}€**`, false)

    //.setImage('https://i.imgur.com/dwLTNyt.png')

    //.setDescription(`**Naam van de verkoper:** ${options.verkoper}\n\n**Naam van de koper:** ${options.koper}\n\n**Nummerplaat:** ${options.nummerplaat}\n\n**Prijs:** €${options.prijs}`)

    //.setFooter(`Van ${user.username}#${user.discriminator}`)

    var announcementChannel = message.guild.channels.find(`name`, "verkochte-autos");

    if (!announcementChannel) return message.channel.send("Invalid Channel");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "va"
}