const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;
var serverName = botConfig.serverName;

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.find(r => r.name === "Support")) {

        var err = new discord.RichEmbed()
            .setColor("0x333333")
            .addField("**Error**", "*You don't have permission.*");

        return message.channel.send(err).then(msg => msg.delete(5000));

    }

    message.delete();

    const user = message.mentions.users.first() || message.author;

    var announce = args.join(" ");

    if (!announce) return message.channel.send("!meld (bericht)");

    var announceEmbed = new discord.RichEmbed()
        .setColor(mainColor)
        .setDescription(`${serverName} **Mededeling | @everyone :Verified: **\n\n${announce}`)
        //.setFooter(`Announcement by ${user.username}#${user.discriminator} | ${moment.utc(message.createdAt).format("DD MMM YYYY, HH:mm:ss")}`);
        .setFooter(`Mededeling door ${user.username}#${user.discriminator}`);

    var announceChannel = message.guild.channels.find(`name`, "🚨mededelingen");
    if (!announceChannel) return message.guild.send("Kan het kanaal niet vinden");

    announceChannel.send(announceEmbed);
}

module.exports.help = {
    name: "meld"
}