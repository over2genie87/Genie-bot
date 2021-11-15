const Discord = require("discord.js")
const math = require('mathjs');
const { MessageEmbed } = require("discord.js")
exports.run = async(Client, message, args) => {
    if(!args[0]) return message.channel.send('Veuillez founir un calcule ! <a:Alerte1:754441316905123994>');

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Veuillez fournir une calcule __**Valide**__')
    }

    const embed = new MessageEmbed()
        .setTitle('Calculateur')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Réponsse', `\`\`\`css\n${resp}\`\`\``)
 .setColor('RANDOM')
    message.channel.send({
        embeds: [
            embed
        ]
    });
}