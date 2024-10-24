const fs = require('fs');
const path = require('path');

exports.run = {
   usage: ['chatservice'],
   hidden: ['chatbot'],
   use: 'on / off',
   category: 'owner',
   async: async (m, { client, args, isPrefix, command, users, Func }) => {
      try {
         var buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
               title: "Opsi",
               sections: [{
                  rows: [{
                     title: "Aktifkan",
                     description: `Berfungsi Untuk Menyalakan SATHYA STORE.AI, untuk mengobrol`,
                     id: `.chatbot on`
                  }, {
                     title: "Mematikan",
                     description: `Berfungsi Untuk Mematikan SATHYA STORE.AI Service`,
                     id: `.chatbot off`
                  }]
               }]
            })
         }]

         if (!args[0]) return client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: 'Silahkan Pilih Opsi Berikut',
            footer: global.footer,
            media: ''
         })

         if (args[0] === 'off') {
            if (users.ai === false) return client.reply(m.chat, '🚩 AI Service sudah dimatikan sebelumnya', m);
            users.ai = false;

            // Ambil nomor pengguna dari ID pengirim
            let number = m.sender.replace(/@.+/g, '');

            // Tentukan path file untuk riwayat pesan
            const chatFile = path.join('lib', 'chat', `${number}.json`);

            // Hapus file jika ada
            if (fs.existsSync(chatFile)) {
               fs.unlinkSync(chatFile);
            }

            client.reply(m.chat, `🚩 AI Service Berhasil Dimatikan dan riwayat percakapan dihapus`, m);
         }

         if (args[0] === 'on') {
            if (users.ai === true) return client.reply(m.chat, `🚩 Sudah menyalakan AI Service sebelumnya`, m);
            users.ai = true;
            client.reply(m.chat, `🚩 AI Service Berhasil Diaktifkan`, m).then(() => client.reply(m.chat, `Hallo Kakak 👋!. SATHYA STORE selalu siap membantu Kakak dengan pertanyaan seputar produk jualan dan jasa kami. Jika Kakak ingin mengetahui lebih lanjut tentang produk atau jasa yang kami tawarkan, jangan ragu untuk bertanya ya 😊. Seperti produk apa saja yang di jual, Apa saja payment nya, dan lain-lain seputar Produk jualan kami

> Response By : SATHYA STORE.AI Service`, m));
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   private: true,
   location: __filename
};
