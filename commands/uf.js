const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    const infoEmbed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`information de ${message.member}`)
  .setDescription(`${message.member} on vas enfin savoir qui tu es !`)
  .setThumbnail(message.member.user.avatarURL({dynamic: true}))
  .setFooter("over genie" + " ©️ 2021")
  .setTimestamp()
  .addFields(
      { 
        name: "info de l'utilisateur",
        value: "nom d'utilisateur:"+message.member.user.username+"\n\rtag #"+message.member.user.discriminator+"\n\rnom et tag: "+message.member.user.tag+"\n\rPseudo sur ce serveur ?: "+message.member.displayName+"\n\rbot ?: "+message.member.user.bot+"\n\rID: "+message.member.user.id+" ",
        inline: false
      },
      {
        name: `Info du membre`,
        value: "```a rejoint le serveur le : "+new Date(message.member.joinedAt).toLocaleDateString()+"\nSon compte a été créé le : "+new Date(message.member.user.createdTimestamp).toLocaleDateString()+"```",
        inline: false
      },
      {
        name: `Roles du membre`,
        value: ""+message.member.roles.cache.map(r => r).join(' | ')+"",
        inline: false
      },
    

  )

  return message.channel.send({ embeds: [infoEmbed] })
}