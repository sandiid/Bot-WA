const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { loadSession, saveSession } = require('./firebaseconfig');

(async () => {
  const sessionData = await loadSession();

  const client = new Client({
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    session: sessionData || undefined
  });

  client.on('qr', qr => {
    console.log('🔗 Scan QR ini: https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(qr)); 
  });

  client.on('ready', () => {
    console.log('✅ Bot siap!');
  });

  client.on('authenticated', session => {
    console.log('🔐 Authenticated, menyimpan session...');
    saveSession(session);
  });

  client.on('auth_failure', msg => {
    console.error('❌ Authentication gagal:', msg);
  });

  client.on('disconnected', reason => {
    console.log('🔌 Terputus:', reason);
  });

  client.on('message', msg => {
    if (msg.body === '!ping') {
      msg.reply('pong ❤️');
    } else if (msg.body === '!help') {
      msg.reply(
        `*Menu Bot WA:*\n\n` +
        `1. *!ping* - Cek apakah bot hidup\n` +
        `2. *!help* - Tampilkan menu bantuan\n` +
        `3. *!ai <prompt>* - Tanya AI seperti ChatGPT\n\n` +
        `_Bot by Sandi_`
      );
    } else if (msg.body.startsWith('!datacharger ')) {
      const chargeno = msg.body.slice(13);
      msg.reply(`🔌 Charger No: ${chargeno}`);
    }
  });

  client.initialize();
})();
