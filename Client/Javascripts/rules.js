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
        .setImage('https://cdn.discordapp.com/attachments/727975970296037457/727986078954553414/Rules.png')
        .setDescription("hier onder");
    message.channel.send(e1)

    var e2 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Microfoon**', 'Een microfoon is vereist om lid te worden van onze stad.', false)
        .addBlankField()
        .addField('**OOC (Out of Character)**', 'Out of Character is niet toegestaan.Vind jij dat het roleplay scenario niet eerlijk is? Maak het af tot op het einde en zorg dat je clips hebt opgenomen zodat de staff je kan helpen.', false)
        .addBlankField()
        .addField('**New Life Rule (Nieuwe levensregel)**', 'Als u dood wordt verklaard door een ambulancier of politie agent kunt u niet terugkeren naar de situatie waarin u betrokken was.U bent dan ook verplicht om de roleplay scenario te vergeten.Er kan geen wraak actie of dergelijke mogelijk meer zijn, hier is geen uitzondering voor mogelijk.', false)
        .addBlankField()
        .addField('**Value of Life (Waarderen van leven)**', 'Zodra jij in eerste instantie word bedreigt door middel van wapens ben jij verplicht je leven te waarderen en mee te gaan in de roleplay van je mede-burger.Als je je leven niet waardeert en vermoord wordt zal staff er niks aan doen. Ook geen Refunds!Vind jij dat het roleplay scenario niet eerlijk is? Maak het af tot op het einde en zorg dat je clips hebt opgenomen zodat de staff je kan helpen.', false)
        .addBlankField()
        .addField('**Value of others lives (Het leven van anderen waarderen)**', 'Iedereen moet zijn eigen leven waarderen en die van de mede-burgers. Je gaat nooit niet iemand zomaar vermoorden voor de fun.', false);
    message.channel.send(e2)

    var e3 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e3)

    var e4 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e4)

    var e5 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false)
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e5)

}

module.exports.help = {
    name: "r"
}