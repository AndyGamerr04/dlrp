const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    if (!message.member.roles.find(r => r.name === "Developer")) {

        var err = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("Er is iets fout gegaan! 😕", "*Je hebt geen toestemming*");
        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    var e1 = new discord.RichEmbed()
        .setColor("#282b30")
        .setTitle('**Welkom bij de officiële Hometown Roleplay 2.0 Discord.**')
        .setDescription("hier onder");
    message.channel.send(e1)

    var e2 = new discord.RichEmbed()
        .setColor("#282b30")
        .setTitle('Relels')
        .setImage('https://cdn.discordapp.com/attachments/727975970296037457/727986078954553414/Rules.png');
    message.channel.send(e2)

    var e3 = new discord.RichEmbed()
        .setColor("#282b30")
        .setDescription("- line 1\n- line 1\n- line 2\n- line 4\n- line 5\n- line 6\n- line 7\n- line 8\n- line 9\n- line 10\n");
    message.channel.send(e3)

}

module.exports.help = {
    name: "r"
}