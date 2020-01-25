const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");

    var splitser = "//";

    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Gebruik")
            .setColor("#00ee00")
            .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal`);

        return message.channel.send(useMessage);
    }

    args = args.join(" ").split(splitser);

    if (args[2] == undefined) args[2] = "#eeeeee";
    if (args[3] == undefined) args[3] = "general";

    var options = {

        titel: args[0] || "Melding",
        bericht: args[1] || "Geen inhoud opgegeven",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var announcementMessage = new discord.RichEmbed()
        .setTitle("Announcement:")
        .setColor(options.kleur)
        .setDescription(`Bericht van ${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
        .setTimestamp();

    var announceChannel = message.guild.channels.find(`name`, options.kanaal);
    if (!announceChannel) return message.channel.send("Kan het kanaal niet vinden");

    announceChannel.send(announcementMessage);

}

module.exports.help = {
    name: "announce"
}