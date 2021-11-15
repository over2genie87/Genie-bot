const Discord = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice");
exports.run = async(Client, message, args, voice) => {
    if(message.content.length < 8) return message.creply("mhhoui maitre que puis je faire pour vous ?")
    function doMagic8BallVoodoo() {
        var rand = ['Oui', 'non', 'Peut etre', 'Jamais', 'ouep'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
    message.reply("Mhhh 2sec je réléchie").then(msg => {
        setTimeout(function(){
            msg.edit(doMagic8BallVoodoo())
        }, 2000);
    })
}