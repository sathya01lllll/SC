exports.run = {
   usage: ['sewa'],
   hidden: [''],
   use: '', 
   category: '',
   async: async (m, { client, Func, command, isPrefix }) => {
      try {
         client.reply(m.chat, `𝙇𝙄𝙎𝙏 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏 
- 𝟭 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟮.𝟬𝟬𝟬
- 𝟮 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟯.𝟬𝟬𝟬
- 𝟱 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟱.𝟬𝟬𝟬
- 𝟳 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟴.𝟬𝟬𝟬
- 𝟭𝟬 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟵.𝟬𝟬𝟬
- 𝟭𝟱 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟭𝟯.𝟬𝟬𝟬
- 𝟮𝟬 𝙃𝘼𝙍𝙄 = 𝙍𝙥 𝟭𝟳.𝟬𝟬𝟬`, m)
      } catch (e) {
         console.log(e);
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   location: __filename
}