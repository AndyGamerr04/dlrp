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

//Test Commands
fs.readdir("./Javascript/Test/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Javascript/Test/${f}`);
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

//Bot Config
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Dutch Life Roleplay", { type: "Playing" });
});

//main
bot.on("message", async message => {
  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botConfig.prefix
    };
  }

  var prefix = prefixes[message.guild.id].prefixes;

  var messageArrey = message.content.split(" ");

  var command = messageArrey[0];

  var arguments = messageArrey.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));

  if (!message.content.startsWith(prefix)) return;

  var options = {
    active: active
  };

  if (command) commands.run(bot, message, arguments, options);
});

//Token
bot.login(process.env.token);
