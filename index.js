const TelegramBot = require('node-telegram-bot-api');


const token = 'COLE AQUI SEU TOKEN DO TELEGRAM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);

    bot.sendMessage(chatId, 'Obrigado por entrar em contato');

})