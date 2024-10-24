const TiktokDownloader = require("@tobyg74/tiktok-api-dl").default;

exports.run = {
   usage: ['tiktok2', 'tiktokmp2'],
   use: 'url',
   category: 'downloader', 
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://vt.tiktok.com/ZSFUBvwB4/'), m);
         if (!args[0].match('tiktok.com')) return client.reply(m.chat, global.status.invalid, m);

         client.sendReact(m.chat, '🕘', m.key);

         const result = await TiktokDownloader(args[0], { version: "v1" }); // Gunakan TiktokDownloader dari modul

         if (!result || !result.status) return client.reply(m.chat, '❌ Failed to fetch TikTok details.', m);

         const tiktokData = result.result;

         if (command === 'tiktok2') {
            const caption = `*❒ T I K T O K*

   ○ *Author :* @${tiktokData.author.username}
   ○ *Nickname :* ${tiktokData.author.nickname}
   ○ *Views :* ${tiktokData.statistics.playCount}
   ○ *Comments :* ${tiktokData.statistics.commentCount}
   ○ *Plays :* ${tiktokData.statistics.likeCount}
   ○ *Shares:* ${tiktokData.statistics.shareCount}
   ○ *Downloads :* ${tiktokData.statistics.downloadCount}
   ○ *Duration :* ${tiktokData.duration}s

*Description :*
${tiktokData.description}`;

            await client.sendFile(m.chat, tiktokData.cover[1], 'tiktok_cover.jpeg', caption + '\n\n' + global.footer, m);

            // Selecting the first video URL
            const videoUrl = tiktokData.video[0];
            await client.sendFile(m.chat, videoUrl, 'tiktok_video.mp4', caption + '\n\n' + global.footer, m);
         } 
         client.sendReact(m.chat, '✅', m.key);

         if (command === 'tiktokmp3-2') {
            const musicData = tiktokData.music;

            const caption = `*❒ T I K T O K - M P 3*

   ○ *Title :* ${musicData.title}
   ○ *Author :* ${musicData.author}
   ○ *Duration :* ${musicData.duration}s`;
            await client.sendFile(m.chat, musicData.coverLarge[1], 'tiktok_cover.jpeg', caption + '\n\n' + global.footer, m);
            await Func.delay(500);
            const musicUrl = musicData.playUrl[0];
            await client.sendFile(m.chat, musicUrl, 'tiktok_music.mp3', '', m);
         }
         client.sendReact(m.chat, '✅', m.key);
      } catch (e) {
         console.error(e);
         client.reply(m.chat, '❌ An error occurred while processing the request.', m);
      }
   },
   error: false,
   private: true,
   owner: true,
   location: __filename
};
