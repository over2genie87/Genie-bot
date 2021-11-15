const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    const sat = new Discord.MessageEmbed()
          .setTitle(Client.guilds.cache.size + " / 20")
          .setURL("https://discord.com/api/oauth2/authorize?client_id=888077573064642611&permissions=8&scope=bot")
          .setImage("http://www.simpleimageresizer.com/_uploads/photos/7aba120c/static_1_631x525.png")
        message.channel.send({ embeds: [sat]})
}