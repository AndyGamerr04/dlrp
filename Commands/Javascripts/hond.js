const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    var dog;

    dog = await superAgent
        .get("https://random.dog/woof.json");

    while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {

        dog = await superAgent
            .get("https://random.dog/woof.json");

    }

    var embed = new discord.RichEmbed()

        .setColor("2C2F33")
        .setDescription(`Woofff`)
        .setImage(dog.body.url);

    message.channel.send(embed).then(message => {

        message.react('698550599733608489')
            .catch(() => console.error('Een van de emoji reageerde niet.'));
    });

    message.delete();

}

module.exports.help = {
    name: "hond"
}