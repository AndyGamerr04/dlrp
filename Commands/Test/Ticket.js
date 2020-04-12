const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "694892954845970563";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            var err1 = new discord.RichEmbed()

                .setColor("2C2F33")
                .addField("**Er is iets fout gegaan! 😕**", "*Je hebt al een ticket aangemaakt*");


            bool = true;

            return message.channel.send(err1).then(msg => msg.delete(7000));

        }

    });

    if (bool == true) return;

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });

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
            var err2 = new discord.RichEmbed()

                .setColor("2C2F33")
                .addField("**Er is iets fout gegaan! 😕**", "*Probeer het opnieuw*");

            return message.channel.send(err2).then(msg => msg.delete(7000));
        });

    }).catch(err => {
        var err3 = new discord.RichEmbed()

            .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Probeer het opnieuw*");

        return message.channel.send(err3).then(msg => msg.delete(7000));
    });

}

module.exports.help = {
    name: "devtik2ticket"
}