const discord = module.require('discord.js');
const botConfig = require("../../botconfig.json");

var mainColor = botConfig.mainColor;
var errColor = botConfig.errColor;
var errMessage = botConfig.errMessage;
var fortunes = ["Yes!", "No!", "Maybe!", "I don't know, try again!"];

module.exports.run = async (bot, message, args) => {

  if (!args[0]) {

    var err = new discord.RichEmbed()
      .setColor(errColor)
      .addField(`${errMessage}`, "*Enter a question that you would like to answer.*");

    return message.channel.send(err).then(msg => msg.delete(8000));

  }

  if (args[0]) {

    var ball = new discord.RichEmbed()
      .setColor(mainColor)
      .setAuthor(fortunes[Math.floor(Math.random() * fortunes.length)]);

    message.channel.send(ball)

  } else {

    var errb = new Discord.RichEmbed()
      .setColor(errColor)
      .addField(`${errMessage}`, "*I could not read that. Try again!*");

    message.channel.send(errb).then(msg => msg.delete(8000));
  }

}

module.exports.help = {
  name: "8ball"
}