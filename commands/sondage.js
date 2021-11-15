const Discord = require("discord.js")
const { confirm } = require("djs-reaction-collector")
const collector = require('djs-reaction-collector');
const { MessageEmbed } = require("discord.js")
exports.run = async(Client, message, args) => {
  message.delete()
  if(!message.member.permissions.has('MANAGE_MESSAGES')){
    return message.channel.send('*Vous devez disposer des autorisations de gestion des messages pour lancer des Sondage.');
}
let lien = args[0];
    if(!lien) return message.channel.send("*Veuillez fournir une question !*");
  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setTitle(args.join(" "))
  //.setThumbnail
  .addField("=", `
 **Oui =** <a:verify:891644868441559060>  
 **Non =** <a:Deny_X_Box:893081502114533377> 
  `)
  .setTimestamp()

  const sondage = await message.channel.send({embeds: [embed]});
  await sondage.react("<a:verify:891644868441559060>");
  await sondage.react("<a:Deny_X_Box:893081502114533377>");
}