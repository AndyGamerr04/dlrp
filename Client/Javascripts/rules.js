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
        .addField('**AFK**', 'Ga niet AFK voor een periode langer dan 15 minuten anders u zal automatisch gekickt worden. Herhaalde AFK-overtredingen kunnen tot een temp-ban leiden.', false)
        .addBlankField()
        .addField('**Cop Baiting**', 'Copbaiting is niet toegestaan. Probeer niet opzettelijk de aandacht van de politie op u te trekken, door dingen te doen die u normaal niet zou doen met een agent bij u in de buurt.Voorbeeld: In het midden van kruispunten doelbewust uw motor laten draaien, toeteren en opzettelijk verkeersovertredingen maken in de buurt van een politieagent. ', false)
        .addBlankField()
        .addField('**Burgers ontvoeren**', 'Het beroven van een burger is toegestaan, maar alleen 1 keer per dag de zelfde burger. Burgers ontvoeren mag ook pas vanaf 3 agenten in-dienst!', false)
        .addBlankField()
        .addField('**GTA-Style Driving**', 'Je mag niet GTA-stijl rijden.Voorbeeld: met 300 km/u door de stad en over kruispunten of van een brug springen etc.Tenzij je het roleplay scenario afmaakt "zwaargewond door de ongeval" (niet verder weg rijden!)', false)
        .addBlankField()
        .addField('**Beroven**', 'U mag maximaal met €10.000 oplichten en alleen als hij/zij ook daadwerkelijk geld op zak heeft.Iemand geld laten pinnen of geld overzetten is niet toegestaan! (Dit telt ook bij een gijzeling of bank overval).', false);
    message.channel.send(e3)

    var e4 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Verstoren van RP**', 'Opzettelijk een roleplay scenario van een mede-burger willen verpesten kan worden leiden tot een warn of temp-ban.', false)
        .addBlankField()
        .addField('**Combat Loggen**', 'Uitloggen in een roleplay scenario om te voorkomen dat jij niet vermoord of beroofd/gearresteerd wordt is niet toegestaan.Als je dood ben gegaan moet je wachten op een ambulance!Combat Loggen kan leiden tot een temp-ban!', false)
        .addBlankField()
        .addField('**Schelden/discriminatie**', 'Hij die scheld met hedendaags relevante ziektes (kanker en dergelijke) of met racistische opmerkingen, of andere ongepaste opmerkingen, wordt gestraft met een warn en/of ban.Schelden met ziektes of discriminatie tegen mede-burgers of andere ongepaste opmerkingen leiden tot een perm-ban', false)
        .addBlankField()
        .addField('**Werkvoertuigen**', 'Werkvoertuigen mogen niet gebruik worden voor illegale praktijken.Dit kan worden bestraft met een warn of een temp-ban.', false)
        .addBlankField()
        .addField('**Kleding**', 'Je moet je kleding veranderen wanneer je een personage aanmaakt, dus je mag niet met de standaard kleding op de server spelen.', false);
    message.channel.send(e4)

    var e5 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**RDM (Random Death Match)**', 'Zonder een geldige reden een persoon opzettelijk vermoorden zal bestraft worden.Kill on Sight valt onder RDM.', false)
        .addBlankField()
        .addField('**VDM (Random Vehicle Deathmatch)**', 'Als een slachtoffer opzettelijk aan wordt gereden door iemand die harder gaat dan de toegestaande snelheidzal die worden gestraft met een warn of een perm-ban..', false)
        .addBlankField()
        .addField('**Wraakacties**', 'Het is nadat iemand van het leven beroofd is door een rivaliserende groep, gedurende 24 uur niet toegestaan mee te doen aan eventuele wraakacties tegen deze groep.', false)
        .addBlankField()
        .addField('**Overheid Regels**', 'Een ambtenaar ben je als je bij één van de volgende overheids banen werkt:\n\n> ● Politie\n> ● Ambulance\n> ● ANWB', false)
        .addBlankField()
        .addField('**Ambtenaar in functie**', 'Voor een ambtenaar in functie is het niet toegestaan om zich bezig te houden met illegale praktijken. Als u betrapt wordt op corruptie, kunt mogelijk uw baan kwijt raken.', false);
    message.channel.send(e5)

    var e6 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Ambtenaar buiten dienst**', 'Een ambtenaar buiten dienst mag geen politie wapens opzich houden deze zullen altijd aan het einde van de dienst opgeborgen worden in de wapenkluis.Dit kan worden bestraft met een mondeling waarschuwing en/of een warn.', false)
        .addBlankField()
        .addField('**Overheidsvoertuigen**', 'Als je geen ambtenaar in dienst bent mag je niet een overheidsvoertuigen besturen.', false)
        .addBlankField()
        .addField('**Ambtenaar kleding**', 'Ambtenaar kleding mag je dragen als je een ambtenaar bent en in functie.', false)
        .addBlankField()
        .addField("**Ambulanciers/ANWB'er ontvoeren**", "Ambulanciers of ANWB'ers mogen niet worden ontvoerd/vermoord worden. U kunt een ambulancier niet doden met het reden 'ze weigeren mee te werken', zelfs als ze worden bedreigd. Ze zijn er tenslotte om jou te helpen. (Indien een ambulancier of ANWB'er zelf uitdaagt maak dan een ticket op discord met bewijs)", false)
        .addBlankField()
        .addField('**Politieagenten ontvoeren**', 'Politieagenten mogen worden ontvoerden voor een roleplay scenario vanaf 5 agent in-dienst zijn.', false);
    message.channel.send(e6)

    var e7 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e7)

    var e8 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e8)

    var e9 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false)
        .addBlankField()
        .addField('Inline field title', 'Some value here', false);
    message.channel.send(e9)

}

module.exports.help = {
    name: "r"
}