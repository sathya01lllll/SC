exports.run = {
   usage: ['need'],
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
         client.reply(m.chat, `🔹 NEED AKUN BY SATHYA STORE 🔹
- LOG:
- SPEK:
- DANA:
- EX/INC:

  🔹 INFO PEMBELI 🔹
- *NAMA PEMBELI:*- 
- *NOMOR PEMBELI:* [Klik di sini](https://wa.me/628)
   •🔹 MC:SATHYA STORE 

⚠️ NOTE:
- *JIKA MAU TAWARKAN AKUN, LANGSUNG CHAT NOMOR PEMBELI*
- *SELALU GUNAKAN JASA ADMIN SATHYA STORE*`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}