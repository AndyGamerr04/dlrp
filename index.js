const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Commands/cmd/", (err, files) => {
  if (err) console.log(err);
  var jsFiles = files.filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Commands/cmd/${f}`);

    bot.commands.set(fileGet.help.name, fileGet);

  });

});

/*fs.readdir("./Temp/", (err, files) => {
  if (err) console.log(err);
  var jsFiles = files.filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) {
    console.log("script not found!");
    return;
  }

  jsFiles.forEach((f, i) => {
    var fileGet = require(`./Temp/${f}`);

    bot.commands.set(fileGet.help.name, fileGet);

  });

});*/


bot.on("ready", async () => {

  console.log(`${bot.user.username} is online!`);

  //bot.user.setActivity("PornHub", { type: "watching" });
  //bot.user.setActivity(":smiley: Limburg Roleplay", { type: "Custom" });
  //bot.user.setActivity("to ΛNDY & Friend's™", { type: "listening" });
  //bot.user.setActivity("with the world!", { type: "playing" });
  //bot.user.setPresence({ game: { name: 'with depression', type: "streaming", url: "https://www.twitch.tv/relaxbeats"}});
  //client.user.setStatus('dnd', 'Made by ANDY')

  //bot.user.setStatus('available')
  bot.user.setPresence({ game: { name: 'With depression', type: "streaming", url: "https://www.twitch.tv/relaxbeats" } });

});


bot.on('guildMemberAdd', member => {

  //console.log('User ' + member.username + ' is gejoing!')
  var role = member.guild.roles.find('name', 'Burger')

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

  }

  catch (err) { }

});

bot.login(process.env.token);
