const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    var perm = new Discord.RichEmbed()
      .setColor("D50000")
      .addField("**You don't have permission.**");

    return message.channel.send(perm).then(msg => msg.delete(20));
  }

  var serverEmbed = new discord.RichEmbed()
    .setColor("03a9f4")
    .setURL('https://paypal.me/pools/c/8kVwaMMDYf')
    .setTitle(
      "**Welcome to the official Dutch Life Roleplay server!**"
    )
    .addField(
      "***Dutch Life Roleplay - Steeds Verrassend***",
      "IP: 88.214.58.137:30148", true)
    .addBlankField()
    .addField(
      "***Discord Rules***",
      "\n• No spamming.\n• Moderators reserve the right to delete any post.\n• Use an appropriate name and avatar.\n• No @everyone/@here mentioning without permission.\n• Do not ping staff unless.\n• No self-promotion or advertisements.\n• No personal information.\n", false)
    .addField(
      "***Roleplay Rules***",
      "\n• A microphone is required.\n• Metagaming is not permitted.\n• No RDM(Random Death Match).\n• No VDM(Vehicle Death Match).\n• No NPC Farming.\n• Do not FailRP.\n• Do not grief others.", false)
    .addBlankField()
    .addField(
      "***Discord Terms of Service and Community Guidelines apply***",
      "You must be at least 13 years old to use Discord, and abide by all other terms and guidelines. Everything you do is your own responsibility.", false);

  return message.channel.send(serverEmbed);
};

module.exports.help = {
  name: "we"
};
