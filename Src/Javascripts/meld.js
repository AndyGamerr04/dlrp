const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    //if (!message.member.roles.find(r => r.name === "Staff")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        var err = new discord.RichEmbed()

        .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Je hebt geen toestemming*");
        return message.channel.send(err).then(msg => msg.delete(7000));
    }

    const user = message.mentions.users.first() || message.author;

    //var announce = args.join(" ");
    //if (!announce) return message.channel.send("!meld (bericht)");
    /*if (!args[0]) {

        var err2 = new discord.RichEmbed()

        .setColor("2C2F33")
            .addField(`**Er is iets fout gegaan! 😕**`, "*Geen* **Mededeling** *meegegeven, gelieve een idee mee te geven.*  |  !meld + bericht");
        return message.channel.send(err2).then(msg => msg.delete(7000));
    }*/

    var announceEmbed = new discord.RichEmbed()

    var splitser = "//";

    if (args[0] == null) {

        var useMesagge = new discord.RichEmbed()

        .setColor("2C2F33")
            .setDescription(`!meld **Bericht** ${splitser} **Image-URL**`)
            .addField(`**Er is iets fout gegaan! 😕**`, "*Geen* **Mededeling** *meegegeven, gelieve een idee mee te geven.*  |  !meld + bericht");

        return message.channel.send(useMesagge).then(msg => msg.delete(25000));

    }

    args = args.join(" ").split(splitser);

    var options = {

        bericht: args[0] || "Geen inhoud gespecificeerd",
        link: args[1] || "https://i.imgur.com/rNz0Wwj.png"

    }

    .setColor("005fff")
        .setAuthor('Mededeling Hometown Roleplay')
        .setDescription(`\n\n${options.bericht}\n\n`)
        .setImage(`${options.link}`)
        //.setFooter('Hometown Roleplay V2 2020', );
        //.setFooter(`Mededeling van ${user.username}#${user.discriminator}`);
        //'https://i.imgur.com/rNz0Wwj.png'

    var announceChannel = message.guild.channels.find(`name`, "mededelingen");

    //if (!announceChannel) return message.guild.send("Kan het kanaal niet vinden");
    if (!announceChannel) {

        var err3 = new discord.RichEmbed()

        .setColor("2C2F33")
            .addField("**Er is iets fout gegaan! 😕**", "*Kan het kanaal niet vinden*");
        return message.channel.send(err3).then(msg => msg.delete(7000));
    }

    announceChannel.send(announceEmbed);
}

module.exports.help = {
    name: "meld"
}