const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    var perm = new Discord.RichEmbed()
      .setColor("D50000")
      .addField("**You don't have permission.**");

    return message.channel.send(perm).then(msg => msg.delete(2000));
  }

  var serverEmbed = new discord.RichEmbed()
    .setColor("7289DA")
    .setTitle(
      "**Welcome to the Official Daily Gaming Discord Server!**"
    )
    .addBlankField()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/464880357645484033/643127422354587649/alert.png"
    )
    .addField(
      "***Rules***",
      "\nNo spamming.\nModerators reserve the right to delete any post.\nUse an appropriate name and avatar.\nNo @everyone/@here mentioning without permission.\nNSFW content only in `#nsfw`.\nDo not ping staff unless.\nNo self-promotion or advertisements.\nNo personal information."
    )
    .addBlankField()
    .addField(
      "***Discord Terms of Service and Community Guidelines apply***",
      "You must be at least 13 years old to use Discord, and abide by all other terms and guidelines. Everything you do is your own responsibility."
    );

  return message.channel.send(serverEmbed);
};

module.exports.help = {
  name: "r"
};
