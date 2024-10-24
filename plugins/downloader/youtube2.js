const { ytdown } = require("nayan-media-downloader");

let processing = false; // Variabel untuk menandai apakah permintaan sedang diproses

exports.run = {
   usage: ['ytmp4-2'],
   hidden: ['youtubedl2', 'ytdl2'], 
   use: 'url',
   category: 'downloader',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (processing) return client.reply(m.chat, '❗ Permintaan lain sedang diproses, harap tunggu.', m); // Periksa apakah permintaan sedang diproses
         
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://youtu.be/zaRFmdtLhQ8'), m);
         if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) return client.reply(m.chat, global.status.invalid, m)

         processing = true; // Tandai permintaan sedang diproses
         const start = Date.now(); // Waktu awal pengunduhan
         
         const url = args[0];
         const result = await ytdown(url);

         if (!result || !result.status) {
            processing = false; // Setel kembali variabel processing menjadi false
            return client.reply(m.chat, '❌ Failed to fetch YouTube video details.', m);
         }

         const videoData = result.data;

         const end = Date.now(); // Waktu akhir pengunduhan
         const fetchingTime = end - start; // Waktu yang diperlukan untuk pengunduhan

         const caption = `*❒ Y T - M P 4*

   ○ *Title :* ${videoData.title}
   ○ *Author :* ${videoData.author}
   ○ *Published :* ${videoData.published}
   ○ *Thumbnail :* ${videoData.picture}`;

         await client.sendFile(m.chat, videoData.picture, 'thumbnail.jpg', caption + '\n\n' + global.footer, m);
         await client.sendFile(m.chat, videoData.video, 'video.mp4', caption + '\n\n' + global.footer, m);
         
         client.reply(m.chat, `🍟 *Fetching* : ${fetchingTime} ms\n\n${global.footer}`, m);
         processing = false; // Setel kembali variabel processing menjadi false setelah selesai
      } catch (e) {
         console.error(e);
         processing = false; // Setel kembali variabel processing menjadi false jika terjadi kesalahan
         client.reply(m.chat, '❌ An error occurred while processing the request.', m);
      }
   },
   error: false,
   owner: true,
   private: true,
   location: __filename
};
