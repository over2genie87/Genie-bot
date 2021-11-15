const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    if(message.member.id === "885815268914393139"){
        const embed = new Discord.MessageEmbed()
          .setTitle("<a:verify:891644868441559060> réaction role <a:verify:891644868441559060> ")
          .setColor("BLUE")
          .setTimestamp()
          .setImage("https://cdn.discordapp.com/emojis/837827323079819365.gif?size=100")
          .setFooter("over genie" + " ©️ 2021")
          .setDescription("📢 = Annonces secretes \n\r 🎁 = notif giveaways \n\r 🎯 = notif pub \n\r 🤑 = notifs partenaires")
        message.channel.send({ embeds: [embed] }).then(msg => {
            setTimeout(() => msg.react("📢"), msg.react("🎁"), msg.react("🎯"), msg.react("🤑"), msg.reply("<a:info:892386837950263307>  ce n'ai pas fonctionnel pour le moment <a:info:892386837950263307>"),700)
        })

    }   
    else  {
        message.reply("<:syntax:892457183655100467> seul over genie peut éxécuter cette commande ! <:syntax:892457183655100467> ")
    }
}