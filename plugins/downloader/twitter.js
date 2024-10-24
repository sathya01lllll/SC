const { twitterdown } = require("nayan-media-downloader");

let processing = false; // Variabel untuk menandai apakah permintaan sedang diproses

exports.run = {
   usage: ['twitter'],
   hidden: ['twdown', 'twdl', 'twitterdown'], 
   use: 'url',
   category: 'downloader',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (processing) return client.reply(m.chat, '❗ Permintaan lain sedang diproses, harap tunggu.', m); // Periksa apakah permintaan sedang diproses
         
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://twitter.com/TeamAbhiSha/status/1743351410761019794?t=vms8wxcU0mQuhVxwGCHjFw&s=19'), m);
         if (!args[0].match(/(twitter.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
         
         processing = true; // Tandai permintaan sedang diproses
         
         const start = Date.now(); // Waktu awal pengunduhan
         
         const URL = await twitterdown(args[0]);
         client.sendReact(m.chat, '🕘', m.key) 

         if (!URL || !URL.status) {
            processing = false; // Setel kembali variabel processing menjadi false
            return client.reply(m.chat, '❌ Failed to fetch Twitter content details.', m);
         }

         const data = URL.data;

         const end = Date.now(); // Waktu akhir pengunduhan
         const fetchingTime = end - start; // Waktu yang diperlukan untuk pengunduhan

         await client.sendFile(m.chat, data.HD, 'video.mp4', `🍟 *Fetching* : ${fetchingTime} ms

${global.footer}`, m);
         await Func.delay(2000);
         client.sendReact(m.chat, '✅', m.key) 
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
