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

  };

  message.delete();

  var serverEmbed = new discord.RichEmbed()
    .setColor(mainColor)
    .addField("Region", region[message.guild.region], true)
    .addField("Owner", message.guild.owner, true)
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
    .setThumbnail(guild.icon)
    .addField("Bot Creator", `ΛΝDY#2020`, true);
  return message.channel.send(serverEmbed).then(msg => msg.delete(90000));
};

module.exports.help = {
  name: "info"
};
