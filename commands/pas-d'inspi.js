exports.run = async(Client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.username} n'a plus d'inpiration :(`)
        .setImage('https://c.tenor.com/FoS6NdEmF6cAAAAC/dh9511dh-head-banging-on-the-wall.gif')
    message.reply({
        embeds: [
            embed
        ]
    })
}