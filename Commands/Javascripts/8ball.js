const discord = module.require('discord.js');

var fortunes = ["Ja!", "Nee!", "Kan zijn!"];

module.exports.run = async (bot, message, args) => {

  message.delete();

  var question = args.join(" ");

  if (!args[0]) {

    var err = new discord.RichEmbed()

      .setColor("2C2F33")
      .addField(`**Er is iets fout gegaan! 😕**`, "Voer een vraag in die u wilt beantwoorden.\n!8ball + bericht");

    return message.channel.send(err).then(msg => msg.delete(7000));

  }

  if (args[0]) {

    var ball = new discord.RichEmbed()

      .setColor("45bb8a")

      .addField(`**${message.author.username} vraagt:**`, `${question}`)

      .addField(`**${bot.user.username} antwoord:**`, `${fortunes[Math.floor(Math.random() * fortunes.length)]}`)

      .setFooter('!8ball + vraag  |  om een vraag te beantwoorden.');

    message.channel.send(ball).then(msg => msg.delete(10000));

  } else {

    var errb = new Discord.RichEmbed()

      .setColor("2C2F33")
      .addField(`**Er is iets fout gegaan! 😕**`, "Ik kon dat niet lezen. Probeer opnieuw!");

    message.channel.send(errb).then(msg => msg.delete(7000));

  }

}

module.exports.help = {
  name: "8ball"
}