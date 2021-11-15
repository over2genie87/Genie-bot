const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    let statusaes = [
        `https://media4.giphy.com/media/UH9QKcraNtbxK/giphy.gif?cid=ecf05e4723opm7ljjh0b6ypk61srzxb98m47skyxt1ugnjim&rid=giphy.gif&ct=g`,
        'https://media2.giphy.com/media/4IAzyrhy9rkis/giphy.gif?cid=ecf05e47w1bqfg7ld0me2l9qj97sjtduenh0vlyh820mha8n&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/OMDb1mLPA7r8Y/giphy.gif?cid=ecf05e47jn4kg1g0hwsz9divrlavtp2vdrpnl8ir8nc6a83o&rid=giphy.gif&ct=g'
    ]
    let Gifs = statusaes[Math.floor(Math.random() * statusaes.length)];
    const embed2 = new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setTitle("**Pong !**")
       .setAuthor("over genie")
       .addField("la latence du bot est de", Date.now() - message.createdTimestamp + "ms", true)
       .addField("la latence de l'Api discord est de", Client.ws.ping + "ms", true)
       .setImage(Gifs)

    message.channel.send({ embeds: [embed2]});
    //message.channel.send(`🏓La latence du bot est de : ${Date.now() - message.createdTimestamp}ms. la latence de l'API Discord est de ${Math.round(Client.ws.ping)}ms`);
}