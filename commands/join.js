const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    if(message.member.voice){
        const voice = message.member.voice.channel



        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        message.reply("je suis correctement connecter sur **" + voice.name + "**")
        message.react("<a:verify:891644868441559060>")
    }
    else {
        message.reply("veuillez vous connecter dans un salon vocale")
        message.react("<a:non:869332752015716392>")
    }
    
}