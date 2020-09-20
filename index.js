const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Src/Javascripts/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {

        console.log("script not found!");
        return;

    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Src/Javascripts/${f}`);
        bot.commands.set(fileGet.help.name, fileGet);

    });

});

/*
fs.readdir("./Commands/Errors/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {

    console.log("script not found!");
    return;

  }

  jsFiles.forEach((f, i) => {

    var fileGet = require(`./Commands/Errors//${f}`);
    bot.commands.set(fileGet.help.name, fileGet);

  });

});
*/

/*
fs.readdir("./Commands/Test/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {

    console.log("script not found!");
    return;

  }

  jsFiles.forEach((f, i) => {

    var fileGet = require(`./Commands/Test//${f}`);
    bot.commands.set(fileGet.help.name, fileGet);

  });

});
*/

bot.on("ready", async() => {

    //console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("BLACKPINK", { type: "listening" });
    //bot.user.setActivity("Hometown Roleplay", { type: "playing" });
    //bot.user.setPresence({ game: { name: 'Live streamen met', type: "streaming", url: "https://www.twitch.tv/relaxbeats" } });

});

bot.on('guildMemberAdd', member => {

    var role = member.guild.roles.find('name', 'Member')
    member.addRole(role)

});

bot.on("message", async message => {

    try {

        if (message.author.bot) return;

        if (message.channel.type === "dm") return;

        var messageArrey = message.content.split(" ");

        var prefix = botConfig.prefix;

        var command = messageArrey[0];

        var arguments = messageArrey.slice(1);

        var commands = bot.commands.get(command.slice(prefix.length));

        if (command) commands.run(bot, message, arguments);

    } catch (err) {}

});

bot.login(process.env.token);