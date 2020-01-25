const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "670591950834892826";

    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");

    }

}

module.exports.help = {
    name: "close"
}