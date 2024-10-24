const { ndown } = require("nayan-media-downloader");

let processing = false; // Variabel untuk menandai apakah permintaan sedang diproses

exports.run = {
   usage: ['instagram'],
   hidden: ['ig', 'igdl'], 
   use: 'url',
   category: 'downloader',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (processing) return client.reply(m.chat, '❗ Permintaan lain sedang diproses, harap tunggu.', m); // Periksa apakah permintaan sedang diproses
         
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www.instagram.com/reel/C3fc4C_I6jm/?igsh=MW0xOTFnN2Zza280Nw=='), m);
         if (!args[0].match(/(https:\/\/www.instagram.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
         
         processing = true; // Tandai permintaan sedang diproses
         const start = Date.now(); // Waktu awal pengunduhan
         
         const URL = await ndown(args[0]);
         client.sendReact(m.chat, '🕘', m.key) 

         if (!URL || !URL.status) {
            processing = false; // Setel kembali variabel processing menjadi false
            return client.reply(m.chat, '❌ Failed to fetch Instagram content details.', m);
         }

         const data = URL.data[0]; // Mengambil data pertama dari array

         const end = Date.now(); // Waktu akhir pengunduhan
         const fetchingTime = end - start; // Waktu yang diperlukan untuk pengunduhan

         await client.sendFile(m.chat, data.thumbnail, 'thumbnail.jpg', `${global.footer}`, m);
         await client.sendFile(m.chat, data.url, 'video.mp4', `🍟 *Fetching* : ${fetchingTime} ms\n\n${global.footer}`, m);
         await Func.delay(2000);
         client.sendReact(m.chat, '✅', m.key);
         processing = false; // Setel kembali variabel processing menjadi false setelah selesai
      } catch (e) {
         console.error(e);
         processing = false; // Setel kembali variabel processing menjadi false jika terjadi kesalahan
         client.reply(m.chat, '❌ An error occurred while processing the request.', m);
      }
   },
   error: false,
   private: true,
   owner: true,
   location: __filename
};

