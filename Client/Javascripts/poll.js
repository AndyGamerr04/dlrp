const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    var idee = args.join(" ");

    var user = message.author;

    //if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");
    if (!args[0]) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField(`**Er is iets fout gegaan! 😕**`, "*Geen* **Idee** *meegegeven, gelieve een idee mee te geven.*  |  !poll + bericht");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var ideeEmbed = new discord.RichEmbed()

        //.setColor("#2C2F33")
        .setColor("7289da")

        //.setAuthor(`${user.username} heeft een poll gemaakt om`, `${user.avatarURL}`)
        .setAuthor(`${user.username} heeft een poll gemaakt.`)

        .setDescription(`\n${idee}\n`)

        .setFooter('!poll + bericht  |  om jouw idee met de mensen te delen.');

    var ideeChannel = message.guild.channels.find(`name`, "poll-suggestie");

    //if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
    if (!ideeChannel) {

        var err2 = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Kan het kanaal niet vinden*");

        return message.channel.send(err2).then(msg => msg.delete(7000));
    }

    ideeChannel.send(ideeEmbed).then(message => {

        message.react('773982069096448000')

            .then(() => message.react('773982069050703944'))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

}

module.exports.help = {
    name: "poll"
}