const discord = require("discord.js");
const botCofig = require(".../botconfig.json");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  var prefix = botCofig.prefix;

  if (!args[0]) {
    var err = new discord.RichEmbed()
      .setColor("D50000")
      .addField("**Error**", `${prefix}report @Username reason`);

    return message.channel.send(err).then(msg => msg.delete(8000));
  }

  var user = message.guild.member(message.mentions.users.first());

  if (!user) return message.channel.send(`@Username not found`);

  var reason = args.join(" ").slice(22);

  if (!reason) return message.channel.send(`${prefix}report @Username reason`);

  var reportEmbed = new discord.RichEmbed()

    .addField("**REPORT**", `${user} *has reported by* ${message.author}`)
    .addField(`***Report Reason***`, reason)
    .setFooter(
      `Reported at ${moment
        .utc(message.createdAt)
        .format("DD MMM YYYY, HH:mm:ss")}`
    )
    .setColor("#ff0000");

  var reportChannel = message.guild.channels.find("name", "report");

  if (!reportChannel) return message.channel.send(`Channel Not Found`);

  message.delete();

  return reportChannel.send(reportEmbed);
};

module.exports.help = {
  name: "report"
};
