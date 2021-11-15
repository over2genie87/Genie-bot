const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_PRESENCES, 
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
});


const bdd = require("./bdd.json")
const captcha = bdd["captcha"]

const ytdl = require("ytdl-core")

const { Permissions } = require('discord.js');

const fs = require("fs")
const prefix = "og!"


Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();
//lient.emotes = config.emoji


//const data = new SlashCommandBuilder()
//  //commande kick
//  .setName("kick")
//  .setDescription("éxpulse le membre demadner")
  //.addUserOption(option => option
//  //1
 //   .setName("membre")
   // .setDescription("membre à éxpulser")
    //.setRequired(true)
  //2

    
  //)
  //.addStringOption(option => option
    //.setName("raison")
    //.setDescription("la raison qui seras fourni au membre")
    //.setRequired(true)
  //)
  
  
  
//Command slash



Client.on("interactionCreate", interaction => {
  if(interaction.isCommand()){
    if(interaction.commandName === "kick"){
      if(!interaction.member.roles === "894188092230074438"){
        interaction.reply("<:GiveMeAdminPeepoSign:892390509501382717> il te faut le role BAN/KICK pour éxécuter cette commande. si tu es un admin du serveur contacte over genie pour avoir le role ou give le toi")
        
      }
      else {
        let user = interaction.options.getMember("membre")
        let raison = interaction.options.getString("raison")
  
        if(user, raison != undefined){
          if(!interaction.options.getUser("membre").bot){
            user.send(`tu as été éxpulsé du serveur __${interaction.guild.name}__ par **__${interaction.member.user.username}__** pour "${raison}"`)
          }
          
          interaction.reply(`<a:verify:891644868441559060> <@${user.id}> a correctement été éxpulser du serveur <a:verify:891644868441559060>`)
          user.kick();
          
          
  
        }
        else {
          interaction.reply("<:syntax:892457183655100467> veuillez spécifier un membre ou une raison");
        }
      }
    }
    if(interaction.commandName === "report"){
      let user = interaction.options.getUser("Le membre")
      let salon = interaction.options.getChannel("Le salon")
      let raison = interaction.options.getString("La raison")
      let rank = interaction.options.getRole("Rank")
      let langue = interaction.options.getNumber("Langue")

      if(!salon.name === "reports"){
        interaction.reply("Veuillez spécifier un salon qui s'appelle report")
      }
      else {
        if(!langue === 1,2){
          interaction.reply("veuillez spécifier la langue :\n 1=fr 2=en")
        }
        else {
          if(langue === 1){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
	          .setTitle('Report de ' + interaction.member.user.tag)
            .setDescription('Nouveau report')
            .setThumbnail(interaction.member.avatarURL)
            .addFields(
              { name: 'La personne report', value: `<@${interaction.member.id}>` },
              { name: '\u200B', value: '\u200B' },
              { name: 'raison', value: raison, inline: true },
              { name: 'rank de la personne', value: `<@${rank.id}>`, inline: true },
            )
            .setImage('http://saccol.org/wp-content/uploads/2021/05/file.png')
	          .setTimestamp()
	          .setFooter('over genie ©️ 2021');

            interaction.reply({ embeds: [exampleEmbed] })

          }
          if(langue === 2){
            const exampleEmbed2 = new Discord.MessageEmbed()
            .setColor('#0099ff')
	          .setTitle('Report of ' + interaction.member.user.tag)
            .setDescription('New report')
            .setThumbnail(interaction.member.avatarURL)
            .addFields(
              { name: 'The person who was reported', value: `<@${interaction.member.id}>` },
              { name: '\u200B', value: '\u200B' },
              { name: 'reason', value: raison, inline: true },
              { name: 'rank of the person', value: `<@${rank.id}>`, inline: true },
            )
            .setImage('http://saccol.org/wp-content/uploads/2021/05/file.png')
	          .setTimestamp()
	          .setFooter('over genie ©️ 2021');

            interaction.reply({ embeds: [exampleEmbed2] })
          }
        }
      }
    
    
    }
  } 
})

const serv = Client.guilds.cache.get("890203861804015688")




Client.on("guildMemberAdd", member => {
  if(member.guild.id != "890203861804015688") return
  member.roles.add("901412584048185345")
  Client.guilds.cache.get("890203861804015688").channels.cache.get("901408037347151882").send("Bienvenue <@" + member.id + "> sur la commu de over genie Fais og!verify pour accèder au serveur !")

})


Client.on("messageCreate", message => {
  if(message.content.startsWith("og!remove")){
    message.member.roles.remove("901412584048185345").then(role => {

    }).catch(err => {
      console.log("erreur" + err)
      message.channel.send("erreur : \n" + err)
    })
  }
})

Client.on("message", message => {
  if(message.content === prefix + "verify"){
    
    if(message.channel.id === "901408037347151882"){
      message.member.roles.remove("890203861804015688").then(
        message.member.roles.add("900391528592199731")
      ).catch((err) => {
        message.channel.send("une erreur est survenue veuillez contacter un admin pour vous verifier ou faites og!remove")
      })
      message.channel.send("Tu as correctement été vérifié bonne journée à toi si tu n'as pas encore accès à tout le serveur vas dans <#9003915529569239960> et clique sur la réaction")

    }
    else {
      message.delete()
      message.member.send("Tu est dèja vérifié x)") 
      
    }
  }
  if(message.content === prefix + "captcha on"){
    if(!message.member.id === "885815268914393139") return message.channel.send("seul over genie peut utiliser cette commande !")
    Client.guilds.cache.get("890203861804015688").channels.cache.get("900399081103437856").send("Le captcha a correctement était activé par **" + message.member.user.tag + "**")
    
    console.log("le captcha est maintenant en " + captcha)
    
  }
  if(message.content.startsWith( prefix + "tuto")){
    message.channel.send("Veuillez patienter...").then(msg => {
      setTimeout(() => msg.delete(), message.member.send("https://discord.gg/R46YVme"),2000)
  })
    
  }

})





Client.on("ready", () => {

    console.log("connécté entant que" + ' ' + Client.user.tag + '!')
    let statuses = [
      `Je suis sur ${Client.guilds.cache.size} serveur !`,
      'mon créateur de genie : over genie ',
      prefix + 'help pour voir mes commandes'

    ]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        Client.user.setActivity(status, {type: "STREAMING", url: 'https://www.twitch.tv/overgenie_'})
    }, 5000)
    
  const embed3 = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`**<a:verify:891644868441559060> le bot a correctement était lancé<a:verify:891644868441559060>**`)
  Client.guilds.cache.get("909843839949361222").channels.cache.get("909872506062663781").send({ embeds: [embed3]})


    

    
    


})

Client.on("guildCreate", async guild => {
  const addembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d'être ajouté sur le serveur : ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.ownerId}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor("11d646")
    .setTimestamp()
    .setFooter(`Grace à lui nous sommes ${Client.guilds.cache.size} serveurs`, Client.user.displayAvatarURL())
    Client.guilds.cache.get("909843839949361222").channels.cache.get("909879867737260052").send({ embeds: [addembed]});
})

Client.on("shardError", error => {
  message.channel.send("Une erreur est survenue :" + error)
  let file = require("./erreur.json")
  file.err.push(error)
})

Client.on("messageCreate", message => {


  if(message.content === prefix + "wright roles"){
        if(message.member.id === "885815268914393139", "831867811491086366"){
            const embed = new Discord.MessageEmbed()
              .setTitle("<a:verify:891644868441559060> réaction role <a:verify:891644868441559060> ")
              .setColor("BLUE")
              .setTimestamp()
              .setImage("https://cdn.discordapp.com/emojis/837827323079819365.gif?size=100")
              .setFooter("over genie" + " ©️ 2021")
              .setDescription("👦 = Boy \n\r 👧 = girl")
            message.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => msg.react("👧"), msg.react("👦"),700)
            })

        }   
        else  {
            message.reply("<:syntax:892457183655100467> seul over genie ou 𝕎𝕣𝕚𝕘𝕙𝕥 𝕋𝕍#4807 peut éxécuter cette commande ! <:syntax:892457183655100467> ")
        }
  }
  
  else if(message.content === prefix + "décale"){
        if(message.member.id === "885815268914393139"){
            message.channel.send("@everyone on décale sur https://discord.gg/C7QqxUzmY3 !").then(msg => {
                setTimeout(() => msg.react("<a:verify:891644868441559060>"),700)
            })

        }   

  }


  




const command = message.content
    
    

})

const Canvas = require("canvas")
const moment = require("moment")

Client.on("guildMemberAdd", async member => {
 

})


const { joinVoiceChannel } = require("@discordjs/voice");


Client.on("messageCreate", message => {
  

  if(message.content.startsWith(prefix + "join")){
    
  }
  
  const commande = message.content
})
const Enmap = require("enmap");

Client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log("✅ commande chargé : " + commandName + "✅")
    Client.commands.set(commandName, props);
  });
});

Client.on("messageCreate", async message => {
  if (message.author.bot) return;


  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = Client.commands.get(command);

  const voice = message.member.voice

  

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return 
//message.reply("cette commande n'éxiste pas fais og!help pour voir mes commandes !")

  // Run the command
  cmd.run(Client, message, args, voice);
});

Client.on('voiceStateUpdate', (oldState, newState) => {
  if(newState.channelId === "898949994533507123"){
    newState.member.voice.disconnect()
    console.log("!!!!!!!!!!!!!!!!!!!!")
  }
});

Client.on("messageReactionAdd", reaction => {

    
})



Client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "mute")){
  if (!message.member.permissions.has('MUTE_MEMBERS')) return message.reply('<a:Deny_X_Box:893081502114533377> Tu n\'a pas la permissions');
  if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply('Je n\'ai pas la permissions "MANAGE_ROLES"');
  
  //Variables
  var muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
  var memberRole = message.guild.roles.cache.find(r => r.name === 'Abonné');
  
  //let
  let member = message.mentions.members.first();
  if(!member) return message.reply("veuillez mentionner un membre")
  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'AUCUNE RAISON';
  
  message.member.roles.add(muteRole);
  message.member.roles.remove(memberRole);
  
  var muteEmbed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle(`\`${member.user.tag}\` a été mute pour **${reason}**`);
  
  message.channel.send({
      embeds: [
        muteEmbed
      ]
  }).catch(err => console.log(err));
  
  }

  if(message.content === prefix + "setchnnels"){
    if(!message.author.id === "885815268914393139") return message.channel.send("<a:Deny_X_Box:893081502114533377>Tu ne peut pas utiliser cette commande<a:Deny_X_Box:893081502114533377> ")
    if(!message.guild.id === "890203861804015688") return message.channel.send("<a:Deny_X_Box:893081502114533377>Cette commande ne s'utilise que sur la commu de over genie<a:Deny_X_Box:893081502114533377> ")
    
    
  }
  if(message.content === prefix + "reaction"){
    message.delete()
    var embed = new Discord.MessageEmbed()
      .setTitle("Réaction roles :")
      .setColor("RED")
      .setDescription("Bienvenue . Ici bous pouvez prendre vos roles \n\r <a:Annonce1:909867702947033148> = Annonces \n\r <a:diams:909867831217250304> = Partenaire")
      .setImage("https://cdn.discordapp.com/attachments/909846322629193821/909846512283054080/G.png")
      .setTimestamp()
    message.channel.send({
      embeds: [
        embed
      ]
    }).then(msg => {
      msg.react("<a:Annonce1:909867702947033148>")
      msg.react("<a:diams:909867831217250304>")
    })
  }
  if(message.content === prefix + "yt stats"){
    let fetch = require('node-fetch')
    const {
      items
  } = await fetch(bdd["API URL"]).then(response => response.json());
    const embedYoutube = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('statistique de la chaine : over genie')
        .setURL('https://youtube.com/')
        .setAuthor('over genie', 'https://imagizer.imageshack.com/img923/8959/dPxp5J.gif', 'https://youtube.com/')
        .setDescription('Voici mes statistiques youtube')
        .setThumbnail('https://imagizer.imageshack.com/img923/8959/dPxp5J.gif')
        .addFields({
                name: 'Nombre d\'abonnés',
                value: items[0].statistics.subscriberCount,
                inline: true
            }, {
                name: 'Nombre de vidéos : ',
                value: items[0].statistics.videoCount,
                inline: true
            }, {
                name: 'Nombre de vues sur la chaîne : ',
                value: items[0].statistics.viewCount,
                inline: true
            },
            {
              name: "nombres d'abonnés caché ?",
              value: items[0].statistics.hiddenSubscriberCount ? "oui" : "non",
              inline: true
            },
            {
              name: "id de la chaine",
              value: items[0].id,
              inline: true
            }
            // { name: 'Nombres de bots sur le serveur : ', value: totalbots, inline: true },
            // { name: 'Nombre d\'arrivants : ', value: totalrole, inline: true },
        )
        .setImage('https://cdn.discordapp.com/attachments/908787152907808800/908794171119239238/a_d8768df8917d574772576ac37a4ef5db.gif')
        .setTimestamp()
        .setFooter("over genie" + " ©️ 2021")


    message.reply({ embeds: [ embedYoutube ] })
  }
  if(message.content === prefix + "userinfo"){
    const embed = new Discord.MessageEmbed()
        
      .setColor("RED")
      .setTitle("**__Veuillez faire og!uf__**")
          
          
    message.channel.send({ embeds: [embed]}).then(msg => {
      setTimeout(() => msg.delete(), 500000)
    })
  }


        

    
})






Client.on("messageReactionAdd", (reaction, user) => {
  if(reaction.message.id != "")
  if(reaction.emoji.id === "909867702947033148"){
    const role = reaction.message.guild.roles.cache.find(r => r.id === "909852986124144742")
    const { guild } = reaction.message
    let member = guild.members.cache.find(member => member.id === user.id);
    member.roles.add(role)
  }
  if(reaction.emoji.id === "909867831217250304"){
    const role = reaction.message.guild.roles.cache.find(r => r.id === "909853042424291408")
    const { guild } = reaction.message
    let member = guild.members.cache.find(member => member.id === user.id);
    member.roles.add(role)
  }
})
Client.on("messageReactionRemove", (reaction, user) => {
  if(reaction.emoji.id === "909867702947033148"){
    const role = reaction.message.guild.roles.cache.find(r => r.id === "909852986124144742")
    const { guild } = reaction.message
    let member = guild.members.cache.find(member => member.id === user.id);
    member.roles.remove(role)
  }
  if(reaction.emoji.id === "909867831217250304"){
    const role = reaction.message.guild.roles.cache.find(r => r.id === "909853042424291408")
    const { guild } = reaction.message
    let member = guild.members.cache.find(member => member.id === user.id);
    member.roles.remove(role)
  }
})




const config = require("./config.json")

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) console.log("Une erreur est survenue. C'est la fin du monde aaaaah tout le monde dans le bunker node_modules ! aaaaaah ");
    });
}





const math = require('discord-math'); 
const { default: ms } = require("ms");
const { error } = require("console");
const { UV_FS_O_FILEMAP } = require("constants");





Client.on('message', (message) => {
    

    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content
      .toLowerCase()
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
    const [command, input] = args;
  
    if (command === 'clear' || command === 'c') {
      
      if (!message.member.roles.cache.some(role => role.name === '🎓 • genie', '👮 • co genie', '🛡 • Administrateur', '🔨 • devloppeur', '💻 • apprenti dev [perm admin]', '💻 • apprenti dev [no perm]', '💻 • apprenti dev [no perm]'), !message.member.id === "885815268914393139") {
       return message.channel.send("<a:Deny_X_Box:893081502114533377> tu n'as pas la permissions de gérer les messages ! <a:Deny_X_Box:893081502114533377>");
      } 
      
      
  
      if (isNaN(input)) {
        return message.channel
          .send('<:Error:892024076997103636> Veuillez entrer le nombre de message(s) que vous voulez supprimer <:Error:892024076997103636>')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
  
      if (Number(input) < 0) {
        return message.channel
          .send('<:Error:892024076997103636> veuillez entrer un nombre valide <:Error:892024076997103636>')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
  
      // add an extra to delete the current message too
      const amount = Number(input) > 100
        ? 101
        : Number(input) + 1;
  
      message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          // do you want to include the current message here?
          // if not it should be ${_message.size - 1}
          .send(`<a:verify:891644868441559060> j'ai supprimer \`${_message.size}\` messages <a:verify:891644868441559060>`)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
    }
  
    if (command === 'help' && input === 'clear') {
      message.guild.roles.everyone.setPermissions([Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.MANAGE_MESSAGES]);
      const newEmbed = new Discord.MessageEmbed()
        .setColor('#00B2B2')
        .setTitle('**Help de la commande clear**')
        .setDescription(
          `Cette commande supprime les messages par exemple \`${prefix}clear 5\` ou \`${prefix}c 5\`.`,
        )
        .setFooter(
          `Demander par ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true }),
        )
        .setTimestamp();
  
      message.channel.send({ embeds: [newEmbed] });
    }
    if(message.content === "og!tirage"){
      let aa = [
        "wright tv",
        "user"
      ]
      let status = aa[Math.floor(Math.random() * aa.length)];
      message.reply(status + "a gagner !")
    }
    if (command === 'help' && input === 'say') {
        const newEmbed = new Discord.MessageEmbed()
          .setColor('#00B2B2')
          .setTitle('**Help de la commande clear**')
          .setDescription(
            `Cette commande envoie le message spécifier par exemple \`${prefix}say cc je suis un genie\` le bot vous renverra cc je suis un genie.`,
          )
          .setFooter(
            `Demander par ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }),
          )
          .setTimestamp();
    
        message.channel.send({ embeds: [newEmbed] });
    }
        if (command === 'bg' && input === '3519') {
            message.delete()
            
        const newEmbed = new Discord.MessageEmbed()
          .setColor('#00B2B2')
          .setTitle('**gg tu as trouvé la commande caché !. Tu gagnes ce code : **' + Math.floor(Math.random() * (9999 - 1000 + 1)) + "** envoie ce code à over genie et tu auras une surprise**")
          .setDescription(
            `N'envoie ce code à personne`,
          )
          .setFooter(
            `découvert par ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }),
          )
          .setTimestamp();
    
        message.member.send({ embeds: [newEmbed] });
    }

});













Client.login(config.login)