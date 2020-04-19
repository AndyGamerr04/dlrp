const discord = require("discord.js");

module.exports.run = async (bot, message, member, args) => {

    message.delete();

    var role = member.guild.roles.find('name', 'Agree')

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var embed = new discord.RichEmbed()

        .setColor("45bb8a")

        .setDescription(`\nrules\n`)

    message.channel.send(embed).then(message => {

        message.react('698550597414289499')

            .then(() => member.addRole(role))
            .catch(() => console.error('Een van de emoji reageerde niet.'));

    });

}

module.exports.help = {
    name: "rules"
}