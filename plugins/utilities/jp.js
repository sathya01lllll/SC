exports.run = {
   usage: ['jp'],
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
         client.reply(m.chat, `*FORMAT JASA POST BY [SATHYA STORE]*

 *(BUKAN AKUN ADMIN)*

Akun:

Harga:

Spesifikasi:

Log:

Nama Pemilik:

[Hubungi Pemilik](wa.me/628xxxxxx)

MC:

*✅ NOTE:*
- Jika ingin negosiasi, segera hubungi nomor penjual di atas.
- Wajib menggunakan jasa admin SATHYA STORE untuk transaksi yang aman dan terpercaya.`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}