const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    const botEmbed = new discord.RichEmbed()

        .title("Niet Klaar.")

        .setColor("2C2F33")

        .addField("Commando's", "`!poll` - maak een poll\n`!hond` - Een foto van een hond\n`!kat` - Een foto van een kat\n`!vosje` - Een foto van een vosje\n`!me` - informatie over jouw")

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "commands"
}