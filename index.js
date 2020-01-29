const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Js", (err, files) => {
  if (err) console.log(err);
  var jsFiles = files.filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }
  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Js${f}`);
    console.log(`${f} are now loaded`);
    bot.commands.set(fileGet.help.name, fileGet);
  });
});

fs.readdir("./Js/Commands/", (err, files) => {
  if (err) console.log(err);
  var jsFiles = files.filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }
  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Js/Commands/${f}`);
    console.log(`${f} are now loaded`);
    bot.commands.set(fileGet.help.name, fileGet);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Dutch Life Roleplay", { type: "Playing" });

});

bot.on("message", async message => {

  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var messageArrey = message.content.split(" ");

  var prefix = botConfig.prefix;

  var command = messageArrey[0];

  var arguments = messageArrey.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));

  if (command) commands.run(bot, message, arguments);

});

bot.login(process.env.token);
