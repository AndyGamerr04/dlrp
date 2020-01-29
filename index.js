const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const active = new Map();
const bot = new discord.Client();
bot.commands = new discord.Collection();

//Javascript
fs.readdir("./Javascript/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Javascript/${f}`);
    console.log(`${f} loaded!`);

    bot.commands.set(fileGet.help.name, fileGet);
  });
});

//Commands
fs.readdir("./Javascript/Commands/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Javascript/Commands/${f}`);
    console.log(`${f} loaded!`);

    bot.commands.set(fileGet.help.name, fileGet);
  });
});

//Private
fs.readdir("./Javascript/Private/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Javascript/Private/${f}`);
    console.log(`${f} loaded!`);

    bot.commands.set(fileGet.help.name, fileGet);
  });
});

//Server
fs.readdir("./Javascript/Server/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Javascript/Server/${f}`);
    console.log(`${f} loaded!`);

    bot.commands.set(fileGet.help.name, fileGet);
  });
});

//Bot Options
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  //bot.user.setActivity("Dutch Life Roleplay", { type: "Playing" });
});

bot.on("message", async message => {
  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var messageArrey = message.content.split(" ");

  var prefix = botConfig.prefix;

  var command = messageArrey[0];

  var arguments = messageArrey.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));

  if (!message.content.startsWith(prefix)) return;

  var options = {
    active: active
  };

  if (command) commands.run(bot, message, arguments, options);
});

bot.login(process.env.token);
