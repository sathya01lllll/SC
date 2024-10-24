exports.run = {
   usage: ['pay'],
   category: 'utilities',
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix
   }) => {
      try {
         // Your Code
         client.sendFile(m.chat, 'https://telegra.ph/file/55a164bce92a1e323acb7.jpg', '', `*❒ Payment*

### 081329731976
- Dana
- Gopay
- Ovo

### 081329731976
- ShopeePay
- Pulsa
- Dana
- Gopay
- Ovo

### Saweria :
https://saweria.co/sathyastore

*N O T E :*
➥ Ketika Selesai Transfer, Harap Kirimkan Bukti Berupa Hasil Transfer (screenshot / id transaksi)
➥ Pesanan Akan Di Proses Setelah Pembayaran Terkonfirmasi
➥ Simpan Bukti Transfer Untuk Claim Garansi (selama ada bukti transfer, garansi bisa di claim)`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}