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
        .setColor("#7289da")
        .setTitle('**Hometown Roleplay 2.0**')
        .setDescription("hier onder")
        .setImage('https://i.imgur.com/hmW0ZHX.png');
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
        .addField('**Politie beroven**', 'Het beroven van een politiebureau is niet toegestaan. Een agent beroven van ze wapen of wat dan ook is niet mogelijk. (Eten, drinken of repairkits mogen etc wel beroven worden)', false)
        .addBlankField()
        .addField('**Valse melding**', 'Een valse melding maken op de ambtenaar naar de locatie te lokken zonder geldige reden.', false)
        .addBlankField()
        .addField('**Commando /assist**', 'Gebruik /assist alleen als het echt nodig is! Misbruiken van het commando kan leiden tot een temp-ban.', false)
        .addBlankField()
        .addField('**Commando /ooc**', 'Gebruik /ooc uitzonderlijk voor het stellen van vragen over de server en game gerelateerde informatie.Roleplay gerelateerde vragen kun je stellen via twitter, sms en/of bellen. Misbruiken van het commando kan leiden tot een temp-ban.', false)
        .addBlankField()
        .addField('**Breaking character**', 'Het is niet de bedoeling om in roleplay te klagen dat een situatie Fail RP, maak de roleplay af en maak ondertussen een report aan. We raden iedereen aan om NVIDEA te gebruiken zodat je altijd kunt opnamen, zonder bewijs kunnen we niks. ‎', false);
    message.channel.send(e7)

    var e8 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Refunds**', 'Mocht je iets kwijtraken en kun je er zelf niks aan doen? Bijvoorbeeld bij een onaangekondigde restart of door een bug. Dan kom je in aanmerking voor een refund, je moet hiervoor een ticket openen via de Discord server. We accepteren alleen refunds als er bewijs is dus we raden iedereen aan om NVIDEA te gebruiken zodat je altijd je gameplay kunt opnemen (van de laatste 20 minuten). Mocht je dan iets kwijtraken kun je gelijk de opname opslaan.', false)
        .addBlankField()
        .addField('**Metagaming**', 'Metagaming is dat je real-life kennis gebruikt om de acties van je personage te bepalen. Dit is natuurlijk niet mogelijk/toegestaan. Als je bijvoorbeeld vast zit in een cel en je hebt geen telefoon of andere communicatie bij je kun niet je vrienden via Discord vragen of ze je kunnen komen redden. ‎', false)
        .addBlankField()
        .addField("**Onrealistisch scenario's**", "Onrealistische scenario's zijn niet toegestaan. Bijvoorbeeld: gelijk schieten tijdens een overval of zonder reden iemand zijn auto stelen.", false)
        .addBlankField()
        .addField('**Alt accounts**', 'Het is verboden alt accounts aan te maken met de intentie het start bedrag over te schrijven naar het account waar normaal op gespeeld wordt.', false)
        .addBlankField()
        .addField('**Cheaten**', 'We geven iedereen een kans om eerlijk te roleplayen, hackers zijn hier niet welkom. Ook als je hacks hebt gebruikt in andere steden ben ook bij ons niet welkom.', false);
    message.channel.send(e8)

    var e9 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Exploits**', 'Dit wordt in geen enkele vorm gewaardeerd je bent verplicht om bugs te melden in #bug-support . Geen enkele vorm van bug-abuse wordt geaccepteerd. Doe je het wel kan het leiden tot een server ban!', false)
        .addBlankField()
        .addField('**Stream snipen**', 'Het is niet toegestaan om informatie uit stream te gebruiken, streamers te achtervolgen en lastig te vallen. Dit zal zorgen voor een directe ban.', false)
        .addBlankField()
        .addField('**Stemherkenning**', 'Het is verboden om een speler te herkennen aan zijn/haar stem. Iemand die dus een masker/andere kleding  op heeft en zichzelf onherkenbaar heeft gemaakt kun je niet herkennen aan zijn/haar stem.', false)
        .addBlankField()
        .addField('**Meewerken**', 'Probeert altijd mee te werken in een scenario, zo maak je de roleplay voor iedereen leuk. Mocht je het ergens niet mee eens zijn, klaag dan pas na het scenario.', false)
        .addBlankField()
        .addField('**Veiligheid onderhandelaars**', 'Het gijzelen of neerschieten van onderhandelaars is nooit toegestaan.', false);
    message.channel.send(e9)

    var e10 = new discord.RichEmbed()
        .setColor("#282b30")
        .addField('**Bank/juwelier overval**', 'Een bank overvallen is een grote missie, dit heeft voorbereiding nodig. Je bent verplicht om vooraf een realistisch plan te hebben.', false)
        .addBlankField()
        .addField('**Vluchten voor de politie**', 'Om te vluchten van de politie heb je een geldige reden nodig. ‘’Ik had geen zin in een boete’’ is geen geldige reden. In het echt vlucht je daarvoor ook niet voor de politie.', false)
        .addBlankField()
        .addField('**Criminele organisaties**', 'Criminele organisaties mogen een maximaal ledenaantal hebben van 8 personen.', false)
        .addBlankField()
        .addField('**Gedrag criminele organisaties**', 'Opvallend negatief gedrag van criminele organisaties of veel warns kan lijden tot het op opschorten van de criminele organisaties.', false)
        .addBlankField()
        .addField('**Ambulance is leidend**', 'Op het moment dat je wordt geholpen door de ambulance is de ambulance leidend in de roleplay. Uiteraard kun je aangeven wat er is, maar de ambulance bepaald dus of je meegaat naar het ziekenhuis en hoe lang bepaalde zaken duren. (Dus ook als iemand doodverklaard wordt)', false)
        .addBlankField()
        .addField('Fouilleren', 'Fouilleren zonder reden is niet toegestaan. Er moet sprake zijn van een mogelijk incident of een verkeerscontrole. Mocht je als verdachte worden gezien mag de politie altijd fouilleren.', false)
        .addBlankField()
        .addField('**Legale banen**', 'Alle legale banen vanuit het uitzendbureau mogen niet overvallen worden.', false);
    message.channel.send(e10)

    var e11 = new discord.RichEmbed()
        .setColor("#ff3c3c")
        .addField('**Straffen:**', '> ● Mondelinge waarschuwingen\n> ● Officiële waarschuwingen\n> ● Ban/kick', false)
        .addBlankField()
        .addField('**Waarschuwingen:**', '> ● 2 waarschuwingen is 1 dag ban.\n> ● 5 waarschuwingen is 1 week ban.\n> ● 6 waarschuwingen is een permanente ban.\n\n**LET OP!** Hacken of schelden met ziektes leidt tot een permanent ban.', false)
    message.channel.send(e11)
}

module.exports.help = {
    name: "r"
}