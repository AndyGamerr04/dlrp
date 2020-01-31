const discord = require("discord.js");
const moment = require("moment");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;
var serverName = botConfig.serverName;

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("**You don't have permission.**");

    message.delete();

    const user = message.mentions.users.first() || message.author;

    var announce = args.join(" ");

    if (!announce) return message.channel.send("!announce (announce + link)");

    var announceEmbed = new discord.RichEmbed()
        .setColor(mainColor)
        .setDescription(`${serverName} **Announcement | @everyone **\n\n${announce}`)
        .setFooter(`Announcement by ${user.username}#${user.discriminator} | ${moment.utc(message.createdAt).format("DD MMM YYYY, HH:mm:ss")}`);

    var announceChannel = message.guild.channels.find(`name`, "📍announcements");
    if (!announceChannel) return message.guild.send("Kan het kanaal niet vinden");

    announceChannel.send(announceEmbed);

}

module.exports.help = {
    name: "announce"
}