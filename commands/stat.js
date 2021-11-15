const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    if(Client.guilds.cache.size > 20){
        message.channel.send("objectif atteint !")
      }
      const sat = new Discord.MessageEmbed()
    
        .setTitle("je suis sur " + Client.guilds.cache.size + " serveurs !")

    message.channel.send({ embeds: [sat]})
}