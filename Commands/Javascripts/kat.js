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
        .setDescription(`:CatHeartEyes: Meawww`)
        .setImage(cat.body.file);

    message.channel.send(embed).then(message => {

        message.react('698550599733608489')

            //.then(() => message.react('698550597888245770'))
            //.then(() => message.react('698550597816680498'))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

}

module.exports.help = {
    name: "kat"
}