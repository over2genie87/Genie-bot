const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(6).trim();
    if(!SayMessage) return message.reply("je dois dire quoi ?")
    message.delete()
    message.channel.send(SayMessage)
}