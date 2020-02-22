const discord = require("discord.js");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;
var version = package.version;

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
    .setThumbnail(message.guild.iconURL)
    .addField("Owner", message.guild.owner, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Verification ...", verifLevels[message.guild.verificationLevel], true)
    //.addField("Humans",`${message.guild.members.filter(member => !member.user.bot).size}`,true)
    //.addField("Bots",`${message.guild.members.filter(member => member.user.bot).size}`,true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Members", message.guild.members.size, true)
    .addField("Roles", message.guild.roles.size, true)
    .setTimestamp()
    .setFooter(`Bot version: ${version}`);
  return message.channel.send(serverEmbed).then(msg => msg.delete(90000));
};

module.exports.help = {
  name: "info"
};
