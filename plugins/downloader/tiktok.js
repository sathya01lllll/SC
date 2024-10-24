const { tikdown } = require("nayan-media-downloader");

exports.run = {
   usage: ['tiktok', 'tiktokmp3'],
   hidden: ['tt', 'ttmp3', 'tikmp3', 'tiktokdl'], 
   use: 'url',
   category: 'downloader',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://vt.tiktok.com/ZSNvs6h6o/'), m);
         if (!args[0].match('tiktok.com')) return client.reply(m.chat, global.status.invalid, m)

         client.sendReact(m.chat, '🕘', m.key);

         const miku = args[0];

         const result = await tikdown(miku);

         if (!result || !result.status) {
            return client.reply(m.chat, '❌ Failed to fetch TikTok details.', m);
         }

         const videoData = result.data;

         if (command === 'tiktok' || command === 'tt' || command === 'tiktokdl') {
            const caption = `*❒ T I K T O K - V1*

   ○ *Author :* ${videoData.author.nickname}
   ○ *Unique ID :* ${videoData.author.unique_id}
   ○ *Views :* ${videoData.view}
   ○ *Comments :* ${videoData.comment}
   ○ *Plays :* ${videoData.play}
   ○ *Shares:* ${videoData.share}
   ○ *Downloads :* ${videoData.download}
   ○ *Duration :* ${videoData.duration}s

*Caption :*
${videoData.title}`;

            await client.sendFile(m.chat, videoData.video, 'tiktok_video.mp4', caption + '\n\n' + global.footer, m);
         } else if (command === 'tiktokmp3' || command === 'ttmp3' || command === 'tikmp3') {
            await client.sendFile(m.chat, videoData.audio, 'music.mp3', '', m);
         }
      } catch (e) {
         console.error(e);
         client.reply(m.chat, '❌ An error occurred while processing the request.', m);
      }
   },
   error: false,
   owner: true,
   private: true,
   location: __filename
};