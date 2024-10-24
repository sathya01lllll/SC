exports.run = {
   usage: ['pushstatus'],
   category: 'owner',
   async: async (m, { client, text, isPrefix, command, Func }) => {
      try {
         let msg = text;
         if (!msg) return client.reply(m.chat, Func.example(isPrefix, command, 'Hello World!'), m);

         client.sendReact(m.chat, '🕘', m.key)

         // Mengambil data pengguna dari database
         let users = global.db.users.map(user => user.jid);

         // Mengirim pesan ke status
         await client.sendMessage('status@broadcast', {
            text: msg
         }, {
            backgroundColor: '#000000',
            font: 5,
            statusJidList: users // Menggunakan array yang berisi daftar jid pengguna
         });

         await client.sendReact(m.chat, '✅', m.key);
      } catch (e) {
         console.error(e);
         await client.reply(m.chat, `Terjadi kesalahan: ${e.message}`, m);
      }
   },
   error: false,
   owner: true,
   location: __filename
};