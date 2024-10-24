const axios = require('axios');

exports.run = {
   usage: ['get'],
   hidden: 'fetch',
   use: 'query',
   category: 'utilities',
   async: async (m, { client, args, text, isPrefix, command, Func, env }) => {
      try {
         if (/get|fetch/i.test(command)) {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, global.db.setting.cover), m)
            client.sendReact(m.chat, '🕒', m.key)

            const url = args[0];
            const headers = {
               "Access-Control-Allow-Origin": "*",
               "Referer": "https://www.google.com/",
               "Referrer-Policy": "strict-origin-when-cross-origin",
               "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
               "Accept": "image/*",
            };

            const fetch = await axios.get(url, { headers });

            const size = fetch.headers['content-length'] ? Func.formatSize(fetch.headers['content-length']) : '1 KB'
            const chSize = Func.sizeLimit(size, env.max_upload)

            if (chSize.oversize) return client.reply(m.chat, `💀 File size (${size}) exceeds the maximum limit, we can't download the file.`, m)

            if (/json/i.test(fetch.headers['content-type'])) return m.reply(Func.jsonFormat(fetch.data))
            if (/text/i.test(fetch.headers['content-type'])) return m.reply(fetch.data)
            client.sendFile(m.chat, url, '', 'This Result', m)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, e.message, m)
      }
   },
   error: false,
   restrict: true, 
   owner: true
};
