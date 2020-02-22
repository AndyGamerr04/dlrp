const Discord = require("discord.js");
const botConfig = require("../../botconfig.json");

var errColor = botConfig.errColor;
var errMessage = botConfig.errMessage;

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    var perm = new Discord.RichEmbed()
      .setColor(errColor)
      .addField(`${errMessage}`, "*You don't have permission.*");
    return message.channel.send(perm).then(msg => msg.delete(2000));
  }

  if (!args[0]) {
    var err = new Discord.RichEmbed()
      .setColor(errColor)
      .addField(`${errMessage}`, "*Invalid number.*");
    return message.channel.send(err).then(msg => msg.delete(2000));
  }

  message.channel.bulkDelete(args[0]).then(() => { });
};

module.exports.help = {
  name: "clear"
};
