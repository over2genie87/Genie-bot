const Discord = require("discord.js")
exports.run = async(Client, message, args) => {
    const ServerLogo = message.guild.iconURL();
        const ServerInfoEmbed = new Discord.MessageEmbed()
            .setColor("#0C00FF")
            .setTitle("<a:verify:891644868441559060> info du serveur " + message.guild.name + " <:discord:891643554861035561> ")
            .setImage(ServerLogo)
            .setDescription(`About **${message.guild}**`)
            .addField("**🕐Date ou le serveur à été créé**", `le serveur à été créé le **${message.guild.createdAt.toLocaleString()}**`)
            .addField("**©️ Le créateur**", `l'id du créateur est  ${message.guild.ownerId}`)
            .addField("**👥nombre de membres**", "ce serveur à ` " + `${message.guild.memberCount}` + " ` **membres**")
            .addField("**😎nombre d'émoji**", "ce serveur à ` " + `${message.guild.emojis.cache.size}` + " ` **emoji**")
            .addField("**🕵️‍♀️nombre de roles**", "Ce serveur a ` " + `${message.guild.roles.cache.size}` + " ` **roles**")
            .addField("**💬nombre de salon**", "ce serveur a ` " + `${message.guild.channels.cache.size}` + " ` **salons**")
            .addField("**👁️‍🗨️Logo du serveur**", "**télécharger le logo**")
            .setURL(ServerLogo)
            .setThumbnail(ServerLogo)
    
        message.reply("veuillez patientez....").then(msg => {
            setTimeout(() => msg.delete(), message.channel.send({ embeds: [ServerInfoEmbed]}), 50000)
        })
}