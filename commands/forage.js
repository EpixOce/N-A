const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.delete();
    }, 10000);
    setTimeout(async function() {
        const r = await message.reply(" Time to **Forage!**");
        setTimeout(function() {
            r.delete();
        }, 30000);
    }, 300000)
}
module.exports.help = {
    name: "forage"
}