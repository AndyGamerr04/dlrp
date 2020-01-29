const search = require('yt-search');

module.exports.run = async (bot, message, args, ops) => {

    search(args.join(' '), function (err, res) {

        if (err) return message.channel.send("Er is iets verkeerd gegaan");

        var videos = res.videos.slice(0, 5);

        var response = '';

        for (var i in videos) {

            response += `**[${parseInt(i) + 1}]:** ${videos[i].title} \r\n`;

        }

        response += `Kies een nummer tussen 1-${videos.length}.`;

        message.channel.send(response);

        const filter = music => !isNaN(music.content) && music.content < videos.length + 1 && music.content > 0;

        const collection = message.channel.createMessageCollector(filter);

        collection.videos = videos;

        collection.once('collect', function (music) {

            var commandFile = require('../music/url.js');

            commandFile.run(bot, message, [this.videos[parseInt(music.content) - 1].url], ops);

        });

    });

}

module.exports.help = {
    name: "play",
    description: "Zoeken naar liedjes"
}