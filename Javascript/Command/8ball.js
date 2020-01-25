
const Discord = module.require('discord.js');

var fortunes = [
  "Ja",
  "Nee",
  "Kan zijn",
  "Weet niet, probeer het opnieuw"
];


module.exports.run = async (bot, message, args) => {

  if (!args[0]) {

    var err = new Discord.RichEmbed()
      .setColor("D50000")
      .addField("**Error**", "*Voer een vraag in die u graag wilt beantwoorden*");

    return message.channel.send(err).then(msg => msg.delete(4000));
  }


  if (args[0]) {

    var ball = new Discord.RichEmbed()

      .setColor("950ceb")
      .setAuthor(fortunes[Math.floor(Math.random() * fortunes.length)]);

    message.channel.send(ball)

  } else {

    var errb = new Discord.RichEmbed()

      .setColor("D50000")
      .addField("**Error**", "*Ik kon dat niet lezen :(*");

    message.channel.send(errb).then(msg => msg.delete(4000));
  }
}

module.exports.help = {
  name: "8ball"
}