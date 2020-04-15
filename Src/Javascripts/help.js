const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .addField("Help opties", "`!commands` - commando's lijst\n!link` - /")

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "help"
}