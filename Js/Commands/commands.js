const discord = require("discord.js");
const botConfig = require("../../botconfig.json");
var mainColor = botConfig.mainColor;

module.exports.run = async (bot, message, args) => {

    var serverEmbed = new discord.RichEmbed()
        .setColor(mainColor)
        .addField("**Command's**", `!8ball\n!avatart\n!hond\n!info\n!kat\n!love\n8me\n!vosje\n\n\n!announce\n!clear\n!idee\n!report\n`)
    return message.channel.send(serverEmbed).then(msg => msg.delete(99000));
};

module.exports.help = {
    name: "cmd"
};
