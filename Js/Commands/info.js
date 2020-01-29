const discord = require("discord.js");

module.exports.run = async (message) => {

  var verifLevels = ["None", "Low", "Medium", "Hard", "FBI"];

  var region = {

    "eu": ":flag_eu: Central Europe",

    "us-central": ":flag_us: U.S. Central",

    "us-east": ":flag_us: U.S. East",

    "us-south": ":flag_us: U.S. South",

    "us-west": ":flag_us: U.S. West",

    "eu-west": ":flag_eu: Western Europe",

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
