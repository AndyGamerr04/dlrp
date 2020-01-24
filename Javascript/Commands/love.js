const Discord = module.require('discord.js');

var Responses = [
    "Yes",
    "No",
    "Maybe",
    "Dont know, try again",
    "Of course no, try again maybe",
    "I mean, i guess so",
    "If you say so",
    "Im not saying anything but you know the answer",
    "Definately not",
    "Its a possibility",
    "A huge chance",
    "A small chance",
    "You better hope so",
    "You better not hope so"
];

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {

        var loveerr = new Discord.RichEmbed()
            .setColor("D50000")
            .addField("**Error**", "*Please Enter A Person Name.*");

        return message.channel.send(loveerr).then(msg => msg.delete(3000));

    }

    if (args[0]) {

        var love = new Discord.RichEmbed()

            .setColor("1E88E5")
            .setAuthor(Responses[Math.floor(Math.random() * Responses.length)]);

        message.channel.send(love)

    }

}
module.exports.help = {
    name: "love"
}