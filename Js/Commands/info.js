const discord = require("discord.js");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

  var verifLevels = ["None", "Low", "Medium", "Hard", "FBI"];

  var region = {

    "europe": ":flag_eu: Europe",

    "us-central": ":flag_us: U.S. Central",

    "us-east": ":flag_us: U.S. East",

    "us-south": ":flag_us: U.S. South",

    "us-west": ":flag_us: U.S. West",

    "eu-west": ":flag_eu: Western Europe",

  };

  message.delete();

  var serverEmbed = new discord.RichEmbed()
    .setColor(mainColor)
    .addField("Owner", message.guild.owner, true)
    .addField("Region", region[message.guild.region], true)
    .addField(
      "Verification Level",
      verifLevels[message.guild.verificationLevel],
      true
    )
    .addField("Total Members", message.guild.members.size, true)
    .addField(
      "Humans",
      `${message.guild.members.filter(member => !member.user.bot).size}`,
      true
    )
    .addField(
      "Bots",
      `${message.guild.members.filter(member => member.user.bot).size}`,
      true
    )
    .addField("Channels", message.guild.channels.size, true)
    .addField("Total Roles", message.guild.roles.size, true)
    .addField("Bot Creator", "I'm A Fox #1518", true);
  return message.channel.send(serverEmbed).then(msg => msg.delete(50000));
};

module.exports.help = {
  name: "info"
};
