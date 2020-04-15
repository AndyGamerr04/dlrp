const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .setDescription("**LIMBURG ROLEPLAY** Hallo, welkom in onze discord server, voordat je begint met onze discord te gebruiken, verwachten we dat je het reglement leest om problemen te voorkomen en een fijne community opbouwen. Vergeten niet dat we nog maar in BETA zijn, dus begrijp alstublief dat wij soms een restart moeten doen. Alvast bedankt voor jullie begrip, Limburg Roleplay!")

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));

}

module.exports.help = {
    name: "help"
}