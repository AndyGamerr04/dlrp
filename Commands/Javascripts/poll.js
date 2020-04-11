const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var idee = args.join(" ");

    var user = message.author;

    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");

    var ideeEmbed = new discord.RichEmbed()

        .setColor("#33ff00")

        .setAuthor(`${user.username}#${user.discriminator}`, `${user.avatarURL}`)

        .setDescription(`\n${idee}\n`)

        .setFooter('!poll + bericht | om uw idee met de mensen te delen.');

    var ideeChannel = message.guild.channels.find(`name`, "🧩poll-suggestie");

    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");

    ideeChannel.send(ideeEmbed).then(message => {

        message.react('698550597414289499')

            .then(() => message.react('698550597888245770'))
            .then(() => message.react('698550597816680498'))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

    message.delete();

}

module.exports.help = {
    name: "poll"
}