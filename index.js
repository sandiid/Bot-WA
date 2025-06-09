const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  qrcode.toDataURL(qr, (err, url) => {
    console.log('🔗 Scan QR ini: https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(qr));
  });
});

client.on('ready', () => {
  console.log('✅ Bot siap!');
});

client.on('message', msg => {
  if (msg.body === '!ping') {
    msg.reply('pong 🏓');
  }
});

client.initialize();
