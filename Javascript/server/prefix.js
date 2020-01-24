const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("**You don't have permission.**");
  if (!args[0]) return message.reply("Usage: !prefix <desired prefix here>");
  var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), err => {
    if (err) console.log(err);
  });

  var stringEmbed = new Discord.RichEmbed()
    .setColor("#009bd3")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`);

  message.channel.send(stringEmbed);
};

module.exports.help = {
  name: "prefix"
};
