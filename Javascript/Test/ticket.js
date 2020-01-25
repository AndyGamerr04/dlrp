const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "670591950834892826";

    var userName = message.author.username;

    var user = message.author;

    var userDiscriminator = message.id;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userDiscriminator) {

            message.channel.send("Je hebt al een ticket aangemaakt");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.author.username)
        .setFooter("Support kanaal wordt aangemaakt");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Hoi, " + message.author.username.toString())
                .setDescription("Zet hier je vraag/bericht");

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Er is iets fout gelopen.");
        });

    })
        .catch(err => {
            message.channel.send("Er is iets fout gelopen.");
        });
}

module.exports.help = {
    name: "ticket"
}