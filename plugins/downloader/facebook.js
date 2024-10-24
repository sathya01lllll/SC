const { ndown } = require("nayan-media-downloader");

let processing = false; // Variabel untuk menandai apakah permintaan sedang diproses

exports.run = {
   usage: ['facebook'],
   hidden: ['fb', 'fbdl'], 
   use: 'url',
   category: 'downloader',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (processing) return client.reply(m.chat, '❗ Permintaan lain sedang diproses, harap tunggu.', m); // Periksa apakah permintaan sedang diproses
         
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www.facebook.com/100000959749712/posts/pfbid0288xi44nvodK9d7r3wf4LHeM3dtEsVghQXmz5t59axwz7KdLStYyg4qfvTVrAL27Ll/?app=fbl'), m);
         if (!args[0].match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
         
         processing = true; // Tandai permintaan sedang diproses
         const start = Date.now(); // Waktu awal pengunduhan
         
         const URL = await ndown(args[0]);
         client.sendReact(m.chat, '🕘', m.key) 

         if (!URL || !URL.status) {
            processing = false; // Setel kembali variabel processing menjadi false
            return client.reply(m.chat, '❌ Failed to fetch Facebook content details.', m);
         }

         const data = URL.data[0];

         const end = Date.now(); // Waktu akhir pengunduhan
         const fetchingTime = end - start; // Waktu yang diperlukan untuk pengunduhan

         await client.sendFile(m.chat, data.thumbnail, 'thumbnail.jpg', `○ *Resolusi :* ${data.resolution}\n\n${global.footer}`, m);
         await client.sendFile(m.chat, data.url, '', `○ *Resolusi :* ${data.resolution}\n🍟 *Fetching* : ${fetchingTime} ms\n\n${global.footer}`, m);
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

