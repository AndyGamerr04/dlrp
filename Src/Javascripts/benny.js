const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!message.member.roles.find(r => r.name === "Benny's Original")) {

        var err = new discord.RichEmbed()
            .setColor("0x333333")
            .addField("**Error**", "*You don't have permission.*");

        return message.channel.send(err).then(msg => msg.delete(5000));

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

        title: args[0] || "Notification",
        bericht: args[1] || "No content specified",
        prijs: args[2] || "No content specified",

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
        .setTitle("Message:")
        .setColor(options.kleur)
        .setDescription(`From ${announcer} \n\n ${options.title} \n\n ${options.bericht} \n\n ${options.prijs} `)
        .setTimestamp();


    var announcementChannel = message.guild.channels.find(`name`, "verkochte-autos");
    if (!announcementChannel) return message.channel.send("Invalid Channel");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "va"
}