const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
    console.log('🔗 Scan QR ini: https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(qr));
});

client.on('ready', () => {
  console.log('✅ Bot siap!');
});

client.on('message', msg => {
  if (msg.body === '!ping') {
    msg.reply('pong 🏓');
  }else if(msg.body === '!help') {
    msg.reply(
  `📌 *Menu Bot WA:*\n\n` +
  `1. *!ping* – Cek apakah bot hidup\n` +
  `2. *!help* – Tampilkan menu bantuan\n` +
  `3. *!ai <prompt>* – Tanya AI seperti ChatGPT\n\n` +
  `_Bot by Sandi_`
);
  }else if(msg.body.startWith("!datacharger "){
		const chargeno = msg.body.slice(13);
   } 
});

client.initialize();
