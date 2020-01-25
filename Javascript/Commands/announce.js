const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("**You don't have permission.**");

    message.delete();

    var announce = args.join(" ");

    var user = message.author;

    if (!announce) return message.channel.send(":c");

    var announceEmbed = new discord.RichEmbed()
        .setColor("#ff9900")
        .setDescription(`**Dutch Life Roleplay Announcement | ${user}**\n\n${announce}`)
        .setFooter(`Dutch Life Roleplay | ${moment.utc(message.createdAt).format("DD MMM YYYY, HH:mm:ss")}`)

    var announceChannel = message.guild.channels.find(`name`, "📍announcements");
    if (!announceChannel) return message.guild.send("Kan het kanaal niet vinden");

}

module.exports.help = {
    name: "announce"
}