const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "670591950834892826";

    var idp = message.id;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == idp) {

            message.channel.send("Je hebt al een ticket aangemaakt");

            bool = true;

        }
    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setFooter("Support kanaal wordt aangemaakt");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(idp, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });

            var embedParent = new discord.RichEmbed()
                .setDescription("Zet hier je vraag/bericht");

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Er is iets fout gelopen.");
        });
    })
}

module.exports.help = {
    name: "support"
}