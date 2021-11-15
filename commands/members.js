const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    const members = new Discord.MessageEmbed()
    .setTitle(`ce serveur a ` + message.guild.memberCount + "membres")
    .setColor("RED")
  message.reply("veuillez patientez....").then(msg => {
      setTimeout(() => msg.delete(), message.channel.send({ embeds: [members]}), 50000)
  })
}