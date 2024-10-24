exports.run = {
   usage: ['tourl'],
   hidden: ['tolink'], 
   use: 'reply foto',
   category: 'converter',
   async: async (m, { client, Func, Scraper }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/image/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Image not found.`), m)
         client.sendReact(m.chat, '🕒', m.key)
         let img = await q.download()
         if (!img) return client.reply(m.chat, global.status.wrong, m)
         let link = await Scraper.uploadImage(img)
         if (!link.status) return m.reply(Func.jsonFormat(link))
         let url = link.data.url
         client.reply(m.chat, url, m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   cache: true,
   owner: true, 
   location: __filename
}