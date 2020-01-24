const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var icon = message.guild.iconURL;

  var verifLevels = ["None", "Low", "Medium", "Hard", "FBI"];

  var region = {
    brazil: ":flag_br: Brazil",
    "eu-central": ":flag_eu: Central Europe",
    singapore: ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    sydney: ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    london: ":flag_gb: London",
    amsterdam: ":flag_nl: Amsterdam",
    hongkong: ":flag_hk: Hong Kong",
    russia: ":flag_ru: Russia",
    southafrica: ":flag_za:  South Africa"
  };

  message.delete();

  var serverEmbed = new discord.RichEmbed()
    .setColor("#1f74df")
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
  return message.channel.send(serverEmbed).then(msg => msg.delete(20000));
};

module.exports.help = {
  name: "info"
};
