const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var perm = new Discord.RichEmbed()
            .setColor("D50000")
            .addField("**You don't have permission.**");

        return message.channel.send(perm).then(msg => msg.delete(2000));
    }

    var serverEmbed = new discord.RichEmbed()
        .setColor("169bd7")
        .setTitle("**Donate for Dutch Life Roleplay**")
        .setURL('https://paypal.me/pools/c/8kVwaMMDYf')
        .setThumbnail("https://i.imgur.com/CDs9Ut0.png");
    return message.channel.send(serverEmbed);
};

module.exports.help = {
    name: "donate"
};