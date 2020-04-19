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

    const botEmbed = new discord.RichEmbed()

        .setColor("2C2F33")

        .addFields(
            { name: '**RECHTLIJNEN** - *Het overtreden van regels leid tot staffzaak.*', value: '• Als een andere burger regels overtreedt, geeft dit je niet het recht om zelf een regel te overtreden.\n• Niet alle regels kunnen vermeld worden, dus gebruik je verstand bij het spel en vermeld ze even.\n• Racisme, onverdraagzaamheid, antisemitisme en elke andere vorm van intimidatie wordt niet getolereerd.\n• Als een restart is geprogrammeerd, zijn de regels nog steeds van toepassing!\n• U moet een geldige reden hebben om met personeel te contracteren!' },
            { name: '\u200B', value: '\u200B' },
            { name: '**ALGEMEEN GEDRAG**', value: "• Burger's moeten elke situatie in een RP-scenario spelen.\n• Burger's die worden vermoord en een respawn vragen, moeten hun RP-scenario waarin ze overleden zijn vergeten.\n• NLR (terug naar de plaats waar je stierf) - Je moet 5 minuten wachten tot de RP-scenario voorbij is.\n• Burgers kunnen geen informatie buiten het roleplay gebruiken om hun RP-scenario in het spel te beinvloeden.\n• Uitzondering: Burgers mogen alleen uit karakter gaan als een medewerker je vraagt om de situatie uit te leggen." },
            { name: '**ROLE PLAYING***', value: '• Burgers moeten hun leven waarderen.\n• Voorbeeld: als een burger een pistool tegen zijn hoofd heeft, moet hij dienovereenkomstig handelen.\n• Burgers moeten medische blessures altijd correct in roleplay spelen.\n• Burgers kunnen niet opzettelijk iets doen voor de politie dat normaal niet zou gebeuren. Dit staat bekend als "Cop Baiting".\n• Burgers kunnen geen onbeheerde politie/medic voertuigen stelen die geparkeerd zijn in de stad.\n• Burgers kunnen een appartement niet betreden om de roleplay te omzeilen.' },
            { name: '**MISBRUIK EN HACKEN**', value: '• Geen bugs misbruiken of exploiteren.\n• Burgers kunnen niet hacken of scripten. (met behulp van software van derden, injectors, enz.).\n• Burgers die een exploit melden volgens de juiste procedures, worden ingame beloond.' },
            { name: '**RDM/VDM** - *Vermoorden of aanvallen zonder roleplay.*', value: '• Geen zwaar wapen uittrekken als iemand je gewapend in de gaten houdt.\n• Geen RDM (Random Death Match) - Iemand zonder reden vermoorden.\n• Geen VDM (Random Vehicle Deathmatch) - Iemand dood rijden met een auto.\n• Geen SpawnKill - Iemand vermoorden op het moment dat ze verbinden.\n• Geen FreeShot - Iemand zonder reden schieten.' },
        )

        .setFooter("!me + @naam  |  om jouw profiel met de mensen te delen.");

    return message.channel.send(botEmbed);

};

module.exports.help = {
    name: "rules"
}

/*

**RECHTLIJNEN** - *Het overtreden van regels leid tot staffzaak.*
• Als een andere burger regels overtreedt, geeft dit je niet het recht om zelf een regel te overtreden.
• Niet alle regels kunnen vermeld worden, dus gebruik je verstand bij het spel en vermeld ze even.
• Racisme, onverdraagzaamheid, antisemitisme en elke andere vorm van intimidatie wordt niet getolereerd.
• Als een restart is geprogrammeerd, zijn de regels nog steeds van toepassing!
• U moet een geldige reden hebben om met personeel te contracteren!


**ALGEMEEN GEDRAG**
• Burger's moeten elke situatie in een RP-scenario spelen.
• Burger's die worden vermoord en een respawn vragen, moeten hun RP-scenario waarin ze overleden zijn vergeten.
• NLR (terug naar de plaats waar je stierf) - Je moet 5 minuten wachten tot de RP-scenario voorbij is.
• Burgers kunnen geen informatie buiten het roleplay gebruiken om hun RP-scenario in het spel te beinvloeden.
• Uitzondering: Burgers mogen alleen uit karakter gaan als een medewerker je vraagt om de situatie uit te leggen.


**ROLE PLAYING***
• Burgers moeten hun leven waarderen.
• Voorbeeld: als een burger een pistool tegen zijn hoofd heeft, moet hij dienovereenkomstig handelen.
• Burgers moeten medische blessures altijd correct in roleplay spelen.
• Burgers kunnen niet opzettelijk iets doen voor de politie dat normaal niet zou gebeuren. Dit staat bekend als "Cop Baiting".
• Burgers kunnen geen onbeheerde politie/medic voertuigen stelen die geparkeerd zijn in de stad.
• Burgers kunnen een appartement niet betreden om de roleplay te omzeilen.


**MISBRUIK EN HACKEN**
• Geen bugs misbruiken of exploiteren.
• Burgers kunnen niet hacken of scripten. (met behulp van software van derden, injectors, enz.).
• Burgers die een exploit melden volgens de juiste procedures, worden ingame beloond.


**RDM/VDM** - *Vermoorden of aanvallen zonder roleplay.*
• Geen zwaar wapen uittrekken als iemand je gewapend in de gaten houdt.
• Geen RDM (Random Death Match) - Iemand zonder reden vermoorden.
• Geen VDM (Random Vehicle Deathmatch) - Iemand dood rijden met een auto.
• Geen SpawnKill - Iemand vermoorden op het moment dat ze verbinden.
• Geen FreeShot - Iemand zonder reden schieten.

*/