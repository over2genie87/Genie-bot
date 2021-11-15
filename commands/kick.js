let Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Tu n\'as pas le perm')
    
    let member = message.mentions.members.first()
    if (!member) return message.reply('Veuillez spécifier un membre')
    let reason = args.slice(1).join(" ");
    if (!reason) reason = 'Pas de raison donner';
    if (!member.kickable) return message.reply('Je ne peux pas kick ce membre')

    const ban = new Discord.MessageEmbed()
    .setTitle("Tu as été kick par " + message.member.user.tag+  "pour " + reason + " du serveur : " +message.guild.name)
    .setDescription("Tu as était kick")
    .addField("Roles du modérateur :", message.member.roles.cache.map(r => r).join(' | ')+"")
    .setTimestamp()
    
    const ban2 = new Discord.MessageEmbed()
    .setDescription("Tu as était kick")
    .setTitle("Tu as été kick par " + message.member.user.tag + " du serveur : " +message.guild.name)
    .addField("Roles du modérateur :", message.member.roles.cache.map(r => r).join(' | ')+"")
    .setTimestamp()
    if(!member.user.bot){
        if(reason = undefined){
            member.send({ embeds: [ban]})
          }
          else {
            member.send({ embeds: [ban2]})
          }
    }

    member.kick(reason)
    message.reply(member.user.tag + " a correctement été éxpulsé")
}