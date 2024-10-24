const { pinterestdl } = require('ironman-api');

exports.run = {
   usage: ['pinterestdl'],
   use: 'url', 
   category: 'downloader',
   async: async (m, { args, Func, client, isPrefix, command }) => {
      try {
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://in.pinterest.com/pin/617204323960160868/'), m);

         const pinterestUrl = args[0];

         // Download image from Pinterest
         const result = await pinterestdl(pinterestUrl);

         if (!result.ironman.url) {
            return client.reply(m.chat, Func.texted('bold', '❌ Unable to fetch image from Pinterest.'), m);
         }

         const caption = `*❒ P I N T E R E S T  - D L*\n\n`
            + `○ *Title:* ${result.ironman.title}\n`
            + `○ *Type:* ${result.ironman.type}\n`
            + `○ *Description:* ${result.ironman.description}\n\n`; 

         // Send downloaded image using sendFile
         await client.sendFile(m.chat, result.ironman.url, '', caption + global.footer, m);

      } catch (e) {
         console.error(e);
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   private: true,
   owner: true,
   location: __filename
};