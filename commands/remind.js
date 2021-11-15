const Discord = require("discord.js")
const ms = require("ms")
exports.run = async(Client, message, args) => {
    const member = message.author

    // Variables
    let reason = args.slice(1).join(" ")
    let time = args[0];

        // Input Checking
        const tempMuteFormatErr = new Discord.MessageEmbed()
          .setDescription('Error! Vous devez indiquer une durée pour votre rappel !.  \`[og!rappel [Durée] [Raison]\`')
          .setColor('RED')
        if (!time) return message.channel.send({ embeds: [tempMuteFormatErr]})

        const noReasonInput = new Discord.MessageEmbed()
          .setDescription('Error! Veuillez indiquer votre raison de rappel ! \`[og!rappel [Durée] [Raison]\`')
          .setColor('RED')
        if (!reason) return message.channel.send({embeds: [noReasonInput]})

        // Executing
        const muteEmbedServer = new Discord.MessageEmbed()
      message.reply(`**Je vais vous __rappelez__ de : \`${reason}\`, dans : \`${time}\` !** `)  
        setTimeout(async function () {
          
          member.send(`**Voici votre rappel: \`${reason}\` !** `)

        }, ms(time));
      
}