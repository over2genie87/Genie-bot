const Discord = require("discord.js")
const { confirm } = require("djs-reaction-collector")
const collector = require('djs-reaction-collector');
exports.run = async(Client, message, args) => {


    let help = [
        "https://media2.giphy.com/media/l0Exezf44dEdueHRK/giphy.gif?cid=ecf05e47kir93qr5e7ijno2v0vklkcffcboadj9yxmrs0yzx&rid=giphy.gif&ct=g",
        "https://media2.giphy.com/media/kgUU1f4LqGkuqAn5Qw/giphy.gif?cid=790b7611e7a1981af432a7170ee80c550853589d64c27dd6&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif?cid=ecf05e47acf96fu1pfocv9x7kel4nmd3gupmzz6220mpu987&rid=giphy.gif&ct=g",
        "https://media2.giphy.com/media/3o84U9yMKAWPuDal2g/giphy.gif?cid=ecf05e4777shsbtepa2y0mu6bespfe9kmhzz0t5gauidprr0&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/tAzgqbwL1FxqElXxKWQ/giphy.gif?cid=ecf05e47kir93qr5e7ijno2v0vklkcffcboadj9yxmrs0yzx&rid=giphy.gif&ct=g",
        "https://c.tenor.com/TGJgYdrOQO0AAAAC/sos-save-me.gif",
        "https://c.tenor.com/W1nmbKo97bYAAAAC/helprave-i-need-help.gif"
    ]
  
    let HelpGif = help[Math.floor(Math.random() * help.length)];
    const embed1 = new Discord.MessageEmbed()
       .setTitle("**Liste des commandes**")
       .setColor("RANDOM")
       .setURL("https://legenie1.000webhostapp.com/")
       .setAuthor("over genie#0001", "https://imagizer.imageshack.com/img923/8959/dPxp5J.gif")
       .setDescription("**voici toutes les commandes ** d'autres commandes éxiste mais ils ne marche pas très bien")
       .setThumbnail("https://cdn.discordapp.com/avatars/888077573064642611/b884aceadfc25096e66604e1c81c63fb.webp")
       .addField("og!help", "❓ affiche les commandesn") 
       .addField("og!ping", "🏓 vous envoie le ping du bot et de l'API discord")
       .addField("og!say <message à envoyer>", "💬 renvoie le message spécifié")
       .addField("og!8ball", "🚩renvoie une raiponse")
       .addField("og!stat", "<:Eyes:892460124323602452> vous donnes le nombre de serveur ou est le bot")
       .addField("og!invite", "<a:peepoMoney:892460572380114946> vous donne le liens pour ajouter le bot")
       .addField("og!objectif", "<a:peepoMoney:892460572380114946> vous renvoie le nombre de serveur ou est le bot / l'objectif de serveur")
       .addField("og!serveurinfo", "🕵️‍♀️vous donnes toutes les iniformation à propos du serveur ou a été envoyer la commande")
       .addField("og!nuke", "<a:agooglebomb:892462921500733501>  supprime tout les messages du salon ou est éxecuter la commande")
       .addField("og!clear", "<a:info:892386837950263307> supprime tout les messages du salon ou est éxecuter la commande")
       
       .addField("pour plus d'info faites",  "og!" + "help nom de la commande", false)
       .setImage(HelpGif)
       .setTimestamp()
       .setFooter("over genie" + " ©️ 2021")
    const embed2 = new Discord.MessageEmbed()
    .setTitle("2 pages de help")
    .setDescription("Voici les commandes")
    .setColor("RANDOM")

    .addFields(
      { name: 'og!kick', value: `Kick un membre demander`, inline: false },
      { name: 'og!ban', value: "ban le membre demander", inline: false },
      { name: 'og!uf', value: `donne des infos sur un utlisateur`, inline: false },
      { name: 'og!start', value: `commence un giveaway`, inline: false },
      { name: 'og!reroll', value: `recommence un giveaway`, inline: false },
      { name: 'og!end', value: `fini un giveaway`, inline: false },
      { name: "og!yt stats", value: "Donne les stats de la chaine de over genie", inline: false},
      { name: "og!gay <mention>", value: "Donne le niveau de gay d'une personne", inline: false},
      { name: "og!lc <mention>", value: "Donne le niveau d'amour entre 2 personne", inline: false},
      { name: "og!kiss <mention>", value: "permet d'embrasser un membre virtuelement", inline: false},
      { name: "og!perm", value: "Affiche vos permissions", inline: false},
      { name: "og!remind <temps> <raison>", value: "vous rappel dans <temps> votre <raison>"},
      { name: "og!sondage <Votre question>", value: "Pose un sondage", inline: false}
    )
    const embed3 = new Discord.MessageEmbed()
    .setTitle("3 pages de help")
    .setDescription("Voici les commandes")
    .setColor("RANDOM")
    .addFields(
      { name: "og!calc ", value: "Fais un calcule", inline: false},
      { name: "og!claque", value: "claque une personne virtuelement", inline: false},
      { name: "og!meme", value: "Vous donne un meme drole", inline: false},
      { name: "og!short", value: "Racourcie une url", inline: false},
      { name: "og!twitter", value: "donne mes stats twitter", inline: false},
      { name: "og!fight", value: "Commence le comabt avec une personne", inline: false},
      { name: "og!pas-d'inspi", value: "Commande qui vous redonne l'inspiration", inline: false}
    )

  message.reply({ embeds: [
    embed1,
    embed2,
    embed3
  ]})
}