const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    let user = message.mentions.users.first()
    if(!user) return message.reply("à qui voulais vous déclarer le fight ?")
    if(user.id === "885815268914393139") return message.reply("Nan pas lui il est trop fort")
    var embed = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.username} se fight contre ${user.username}`)
        .setColor("RANDOM")
        .setImage("https://c.tenor.com/ucmhE4FHoFcAAAAC/fight-smash.gif")
    message.reply({ embeds: [embed]})
}