const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    message.member.kick().catch(err => {
        console.log(err)
    })
}