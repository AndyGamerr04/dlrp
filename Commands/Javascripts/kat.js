const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    var cat;

    cat = await superAgent
        .get("http://aws.random.cat/meow");

    while (cat.body.file.endsWith(".webm") || cat.body.file.endsWith(".mp4")) {

        cat = await superAgent
            .get("http://aws.random.cat/meow");

    }

    var embed = new discord.RichEmbed()

        .setColor("2C2F33")
        .setDescription(`Meowww`)
        .setImage(cat.body.file);

    message.channel.send(embed).then(message => {

        message.react('698550599733608489')
            .then(() => message.delete(600000))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

    message.delete();

}

module.exports.help = {
    name: "kat"
}