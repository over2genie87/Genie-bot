const { shorten } = require('tinyurl');
exports.run = async(Client, message, args) => {
    
    const mes = message.content.split(' ').slice(1).join(' ');
    if(!mes) return message.reply("veuillez fournir une url")
	try {
		shorten(mes, function(res) {
			message.channel.send(res);
		});
	} catch (err) {
		if (Client.config.debug) bot.logger.error(`${err.message} - command: shorturl.`);
		message.channel.send("Une erreur est survenue ressayez").then(m => m.delete({ timeout: 5000 })).then(m => m.delete({ timeout: 10000 }));
	}
}