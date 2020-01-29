const discord = require("discord.js");

module.exports.run = async (message) => {

  message.delete();

  let serverEmbed = new discord.RichEmbed()
    .setColor("#1f74df")
    .addField("Server", "!info\n!report\n!binfo", true)
    .addField("Coming soon", "!play\n!stop\n!next", true)
    .addBlankField()
    .addField(
      "image",
      "!cat\n!dog\n!fox\n!owl\n!panda\n!penguin\n!tiger\n!meme",
      true
    )
    .addField("Fun", `\n!8ball\n!love\n!avatar\n!me `, true)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/571028230874595465/586652663857414177/771612.png"
    );

  return message.channel.send(serverEmbed).then(msg => msg.delete(20000));
};

module.exports.help = {
  name: "help"
};
