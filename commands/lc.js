const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    if(!message.mentions.users.first()) return message.reply("Veuillez sΓ©lΓ©ctionnΓ© un membre")
    let p = message.mentions.users.first().username
    const awser = [
        "0 ππππππππππ",
        "10 ππππππππππ",
        "20 ππππππππππ",
        "30 πππππππππππ",
        "40 ππππππππππ", 
        "50 ππππππππππ", 
        "60 ππππππππππ", 
        "70 ππππππππππ", 
        "80 ππππππππππ", 
        "90 ππππππππππ", 
        "100 ππππππππππ"
    ]

    const gay = new Discord.MessageEmbed()
    .setColor('#353842')
    .setAuthor(`Niveau d'amour entre ${message.member.user.username} et ${p}:`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(awser[Math.floor(Math.random() * awser.length)])
    .setTimestamp()
    message.reply({
        embeds: [
            gay
        ]
    })
}