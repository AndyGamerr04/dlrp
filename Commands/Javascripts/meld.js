const discord = require("discord.js");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    //if (!message.member.roles.find(r => r.name === "Staff")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

            .setColor("0x333333")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(5000));
    }

    message.delete();

    const user = message.mentions.users.first() || message.author;

    var announce = args.join(" ");

    if (!announce) return message.channel.send("!meld (bericht)");

    var announceEmbed = new discord.RichEmbed()

        .setColor(mainColor)

        .setDescription(`📣 **Nieuwe mededeling @everyone **\n\n${announce}`)

        .setFooter(`Mededeling van ${user.username}#${user.discriminator}`);

    var announceChannel = message.guild.channels.find(`name`, "🚨mededelingen");

    if (!announceChannel) return message.guild.send("Kan het kanaal niet vinden");

    announceChannel.send(announceEmbed);
}

module.exports.help = {
    name: "meld"
}