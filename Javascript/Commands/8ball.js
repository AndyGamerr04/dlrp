
const Discord = module.require('discord.js');

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Dont know, try again"
];


module.exports.run = async (bot, message, args) => {

  if (!args[0]) {

    var err = new Discord.RichEmbed()
    .setColor("D50000")
    .addField("**Error**", "*Please Enter A Question You Would Like Answered*");

    return message.channel.send(err).then(msg => msg.delete(4000));
  }


  if (args[0]) {

    var ball = new Discord.RichEmbed()

    .setColor("950ceb")
    .setAuthor(fortunes[Math.floor(Math.random() * fortunes.length)]);   
    
    message.channel.send(ball)

  }  else { 

    var errb = new Discord.RichEmbed()

    .setColor("D50000")
    .addField("**Error**", "*I Wasnt Able To Read That :(*");
    
    message.channel.send(errb).then(msg => msg.delete(4000));
}}

module.exports.help = {
  name: "8ball"
}