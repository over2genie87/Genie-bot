const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    if(!message.mentions.users.first()) return message.reply("Veuillez séléctionné un membre")
    let p = message.mentions.users.first().username
    if(message.mentions.users.first().id === "885815268914393139") return message.reply("Lui est pas gay tkt")
    const awser = [
        "0 ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛", 
        "10 ⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛", 
        "20 ⬜⬜⬛⬛⬛⬛⬛⬛⬛⬛", 
        "30 ⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛", 
        "40 ⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛", 
        "50 ⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛", 
        "60 ⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛", 
        "70 ⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛", 
        "80 ⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛", 
        "90 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛", 
        "100 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜"
    ]

    const gay = new Discord.MessageEmbed()
    .setColor('#353842')
    .setAuthor(`${p} est gay à : `, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(awser[Math.floor(Math.random() * awser.length)])
    .setTimestamp()
    message.reply({
        embeds: [
            gay
        ]
    })
}