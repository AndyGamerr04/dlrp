const discord = module.require('discord.js');

var Responses = [
    "Ja!",
    "Nee!",
    "Dat kan!",
    "Ik weet niet, probeer het opnieuw!",
    //"Of course no, try again maybe",
    //"I mean, i guess so",
    //"If you say so",
    //"Im not saying anything but you know the answer",
    //"Definately not",
    //"Its a possibility",
    //"A huge chance",
    //"A small chance",
    //"You better hope so",
    //"You better not hope so"
];

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {

        var loveerr = new discord.RichEmbed()
            .setColor("D50000")
            .addField("**Fout**", "*Voer een persoonsnaam in.*");

        return message.channel.send(loveerr).then(msg => msg.delete(3000));

    }

    if (args[0]) {

        var love = new discord.RichEmbed()
            .setColor("1E88E5")
            .setAuthor(Responses[Math.floor(Math.random() * Responses.length)]);

        message.channel.send(love)

    }

}
module.exports.help = {
    name: "love"
}