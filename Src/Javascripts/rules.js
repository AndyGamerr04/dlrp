const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    //if (!message.member.roles.find(r => r.name === "Staff")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");

        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    const user = message.mentions.users.first() || message.author;

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .setDescription(`**${user.username}**#${user.discriminator}\n\n**Discord account gemaakt op:** ${moment.utc(user.createdAt).format("`DD MMM YYYY`")}\n**De server gejoind op:** ${moment.utc(message.member.joinedAt).format("`DD MMM YYYY`")}`)

        .setImage(user.avatarURL)

        .setFooter("!me + @naam  |  om jouw profiel met de mensen te delen.");

    return message.channel.send(botEmbed).then(msg => msg.delete(50000));


}

module.exports.help = {
    name: "meld"
}