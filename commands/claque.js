let Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    if(!message.mentions.users.first()) return message.reply("Veuillez mentionner un membre")
    let p = message.mentions.users.first()
    if(p.id === "885815268914393139") return message.reply("Je ne peut pas faire ça")
    let embed = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.username} claque ${p.username}`)
        .setColor("RED")
        .setImage("https://c.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif")
    message.reply({ embeds: [embed]})
}