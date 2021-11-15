const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    if(!message.mentions.users.first()) return message.reply("Veuillez séléctionné un membre")
    let p = message.mentions.users.first().username
    const awser = [
        "https://tenor.com/bk57E.gif",
        "https://tenor.com/bk57E.gif"
    ]

    const gay = new Discord.MessageEmbed()
    .setTitle(`${message.member.user.username} embrasse ${p} ❤️`)
    .setImage("https://c.tenor.com/16MBIsjDDYcAAAAC/love-cheek.gif")
    .setColor("RED")
    message.reply({
        embeds: [
            gay
        ]
    })
}