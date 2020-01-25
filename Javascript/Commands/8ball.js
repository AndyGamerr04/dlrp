const discord = module.require('discord.js');

var fortunes = [
  "Ja!",
  "Nee!",
  "Dat kan!",
  "Ik weet niet, probeer het opnieuw!"
];

module.exports.run = async (bot, message, args) => {

  if (!args[0]) {

    var err = new discord.RichEmbed()
      .setColor("D50000")
      .addField("**Fout**", "*Voer een vraag in die u graag wilt beantwoorden.*");

    return message.channel.send(err).then(msg => msg.delete(4000));
  }

  if (args[0]) {

    var ball = new discord.RichEmbed()
      .setColor("950ceb")
      .setAuthor(fortunes[Math.floor(Math.random() * fortunes.length)]);

    message.channel.send(ball)

  } else {

    var errb = new Discord.RichEmbed()
      .setColor("D50000")
      .addField("**Fout**", "*Ik kon dat niet lezen., Probeer het opnieuw!*");

    message.channel.send(errb).then(msg => msg.delete(4000));
  }
}

module.exports.help = {
  name: "8ball"
}