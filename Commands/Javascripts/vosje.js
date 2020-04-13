const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    var fox;

    fox = await superAgent
        .get("https://randomfox.ca/floof/");

    while (fox.body.url.endsWith(".webm") || fox.body.url.endsWith(".mp4")) {

        fox = await superAgent
            .get("https://randomfox.ca/floof/");

    }

    var embed = new discord.RichEmbed()

        .setColor("2C2F33")
        .setDescription(`Woofff`)
        .setImage(fox.body.url);

    message.channel.send(embed).then(message => {

        message.react('698550599733608489')
            .then(() => message.delete(120000))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

    message.delete();

}

module.exports.help = {
    name: "vosje"
}