const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var perm = new Discord.RichEmbed()
            .setColor("D50000")
            .addField("**You don't have permission.**");

        return message.channel.send(perm).then(msg => msg.delete(2000));
    }

    var serverEmbed = new discord.RichEmbed()
        .setColor("7289DA")
        .setAuthor('Request now for Ambulance job!', 'https://i.imgur.com/wRY3qR2.png', 'https://docs.google.com/forms/d/1uZvwByuTIvaOs81qm7HuJtNnULBfEC4soNgOfx2cD1U/edit')
    return message.channel.send(serverEmbed);
};

module.exports.help = {
    name: "e"
};