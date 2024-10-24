exports.run = {
   usage: ['panel'],
   hidden: [''],
   use: '', 
   category: '',
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix
   }) => {
      try {
         client.reply(m.chat, `𝙇𝙄𝙎𝙏 𝙃𝘼𝙍𝙂𝘼 𝙋𝘼𝙉𝙀𝙇:
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟮𝙂𝘽: 𝙍𝙥 𝟮.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟯𝙂𝘽: 𝙍𝙥 𝟯.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟰𝙂𝘽: 𝙍𝙥 𝟰.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟱𝙂𝘽: 𝙍𝙥 𝟲.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟲𝙂𝘽: 𝙍𝙥 𝟳.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟳𝙂𝘽: 𝙍𝙥 𝟴.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟴𝙂𝘽: 𝙍𝙥 𝟵.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝟵𝙂𝘽: 𝙍𝙥 𝟭𝟬.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣
> 📦 𝙋𝙖𝙠𝙚𝙩 𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿: 𝙍𝙥 𝟮𝟵.𝟬𝟬𝟬/𝘽𝙪𝙡𝙖𝙣`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}