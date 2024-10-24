exports.run = {
   usage: ['produk'],
   hidden: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'vps', 'sewa'],
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix
   }) => {
      try {
if (command === 'produk') {
         client.sendMessageModifyV2(m.chat, `🛍️ Hallo @${m.sender.replace(/@.+/g, '')}

Berikut Adalah Beberapa Produk & Layanan Kami
_Layanan Pembuatan Bot WhatsApp & Layanan Service Bot WhatsApp_

*•* 𝗣𝗿𝗼𝗱𝘂𝗰𝘁
1. Jasa Pembuatan Bot WhatsApp
2. Jasa Pembuatan Fitur Bot WhatsApp
3. Pembuatan Website
4. Sewa Bot WhatsApp
5. Jasa Integrasi API
6. VPS - Virtual Private Server
7. Logo Anime - GFX

${global.footer}`, 'Product', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
         }).then(async () => {
            client.reply(m.chat, `*Jika Ingin Melihat Detail Produk & Layanan*
            
Kirim Pesan *p1 - p7* Berdasarkan List Yang Ada
• *Example* :
*${isPrefix}p1*`)
         })} 
         if (command === 'p1') {
             client.sendMessageModifyV2(m.chat, `*# JASA PEMBUATAN SC BOT WHATSAPP*

> *🛍️ Harga : Rp. 19,999*

*❒ Requirements*

○ Tampilan Bot
○ Fungsi Bot WhatsApp
○ Fitur-fitur Pada Bot
○ Dokumentasi Fitur (Menjelaskan Cara Kerja Fitur)


*❒ Note*

○ *Request Tampilan Bot*
Menjelaskan bagaimana tampilan WhatsApp Bot yang kamu inginkan
○ *Fungsi Bot WhatsApp*
Menjelaskan tujuan kamu ingin membuat WhatsApp Bot, Contoh tujuan seperti (untuk berjualan, untuk integrasi API website, layanan otomatisasi)
○ *Fitur Yang Di Inginkan*
Menyebutkan & Menjelaskan Fitur yang di inginkan & menjelaskan cara kerja fitur


*❒ About the Service & Benefits*

➥ Harga Pembuatan WhatsApp Bot Sesuai Dengan Spesifikasi, Banyaknya Fitur & Kesulitan Pada Fitur
➥ Pembuatan Bot WhatsApp Di Proses Setelah Pembayaran Terkonfirmasi
➥ *BERGARANSI* Jika Terjadi Error Akan Segera Di Fix (Free)`, 'JASA BUAT SCRIPT BOT', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p2') {
             client.sendMessageModifyV2(m.chat, `*# JASA PEMBUATAN FITUR BOT WHATSAPP*

> *🛍️ Harga : Rp. 4,999

*❒ Requirements*

○ Menjelaskan Cara Kerja Fitur
○ Berikan Dokumentasi / Penjelasan Mengenai Fitur
○ Request & Response Fitur

*❒ Note*
➥ Harga Menyesuaikan Dengan Kesulitan Fitur Yang Diminta
➥ Fitur Akan Di Buat Setelah Pembayaran
➥ Garansi / Fix Bug Pada Fitur Free`, 'JASA BUAT FITUR BOT', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p3') {
             client.sendMessageModifyV2(m.chat, `🚀 *PROMO SPESIAL!* 🚀

🌐 *Pembuatan Website hanya Rp 59,999!* 🌐

✨ *Nikmati Beragam Keuntungan:*

1. ✔️ *Desain Profesional:* Website menarik dan sesuai dengan brand Anda.
2. ✔️ *Hosting Gratis:* Layanan hosting inklusif untuk kenyamanan Anda.
3. ✔️ *Domain Gratis:* Dapatkan identitas online dengan domain kustom.
4. ✔️ *SEO-Friendly:* Maksimalkan visibilitas online dengan konten SEO-friendly.
5. ✔️ *Responsif & Cepat:* Pengalaman pengguna yang mulus di semua perangkat.
6. ✔️ *Integrasi Git:* Kontrol versi yang kuat untuk pengelolaan yang mudah.
7. ✔️ *Keamanan Terjamin:* Sertifikat SSL untuk melindungi data pengguna.
8. ✔️ *Tanpa Biaya Tambahan:* Tidak Perlu Khawatir Tentang Biaya Tambahan Setelah Pembuatan Website, Semua Gratis!!.
9. ✔️ *Mudah Dikelola:* Gratis Pembelajaran jika anda ingin mengubah tampilan website / Tambah Produk. 
10. ✔️ *Google Console:* Website Terindeks dengan Google Search, Jadi website bisa di cari dan muncul di halaman Google Search. 
11. ✔️ *Guard Proteksi:* Website Anti Attacking & DDOS Website
12. ✔️ *PEMBUATAN APLIKASI* Website Anda Akan Di Buat Menjadi Aplikasi, Logo & Nama Bisa Di Request (Support Android & IOS)

💻 *Cocok untuk:*

- Usaha Kecil & Menengah
- Portofolio Pribadi
- Blog & Proyek Kreatif
- Menampilkan List Produk

🔥 *LIMITED OFFER!* 🔥

Jangan lewatkan kesempatan istimewa ini! Hubungi kami sekarang untuk memiliki website impian Anda. 🚀✨`, 'JASA BUAT WEBSITE', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p4' || command === 'sewaa') {
             client.sendMessageModifyV2(m.chat, `❒ *SEWA 1 BULAN | Rp 25,000* 
○ Acces Game Features.
○ Free Premium Plan.
○ Unlock All Features.

❒ *SEWA PERMANEN | Rp 299,000* 
○ Acces Game Features. 
○ Free Premium Plan. 
○ Unlock All Features. 
○ Unlock Features Premium. 

*CARA PEMBELIAN :*
1. Chat Admin, Apakah Produk Sewa Bot Tersedia. 
2. Pilih Waktu Durasi Sewa 
3. Lakukan Pembayaran & Kirimkan Hasil (Bukti Transfer) Kepada Admin.
4. Kirimkan Link Group Kepada Admin.
5. Bot Akan Otomatis Masuk Ke Group.

*RULES :*
➥ Harap Tidak Spam Bot
➥ Untuk Eksekusi Selanjutnya Harap Beri Jeda 7 Detik
➥ Tidak Mengirimkan Bug / Virtex Ke Nomor Bot`, 'S', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p5') {
             client.sendMessageModifyV2(m.chat, `*❒ INTEGRASI API*

> *🛍️ Harga : Rp. 19,000

○ Membuat Bot WhatsApp Dengan Integrasi Dari Api (Application Programming Interface)
○ Pembuatan Fitur Bot WhatsApp Via Api
○ Website Api [POST / GET]

*NOTE :*
➥ Harga sesuai dengan kesulitan pembuatan
➥ Berikan Dokumentasi Api secara *Jelas* & *Lengkap*
➥ Hanya Tersedia Bahasa Pemrograman JavaScript Untuk Bot
➥ Bahasa Pemrograman lain :
○ Javascript
○ Python
○ Php`, 'INTEGRASI API', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p6' || command === 'vps') {
             client.sendMessageModifyV2(m.chat, `Ram 1 - 1 Tahun (81K)
Ram 4 - 3 Bulan (81K)`, 'VPS', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
         if (command === 'p7') {
             client.sendMessageModifyV2(m.chat, `*G F X - L O G O*

> *🛍️ Harga : Rp. 3,999

*❒  S T Y L E - L O G O*
○ Anime
○ Rpg
○ Shooter
○ FPS
○ Robotic
○ Game
○ Loli / Chibi


*❒  N O T E*
➥ Logo Tidak Menggunakan Template
➥ Proses Pembuatan Logo 1 Menit
➥ Gambar Tidak Bisa Request, Kami Hanya Menerima Style Logo
➥ Logo Di Atas Adalah Contoh Hasil Jadi


*❒  H O W -  T O  - O R D E R*
➥ Pilih Style Yang Kamu Inginkan & Nama Logo
➥ Kami Akan Memproses 1 - 3 Menit
➥ Admin Akan Mengirimkan Hasil Logo (pilih logo yang kamu suka)
➥ Konfirmasi Pilihan Logo & Lakukan Pembayaran
➥ Konfirmasi Pembayaran (kirim bukti transfer ke admin)
➥ Admin Akan Konfirmasi Pembayaran & Akan Mengirimkan Data Gambar Berupa File & Jpg Dengan Resolusi High Quality`, 'LOGO GFX', {
             largeThumb: true, 
             thumbnail: global.db.setting.cover, 
             url: global.db.setting.link, 
             ads: true
             })
         }
      } catch (e) {
         return console.log(e)
        // client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   private: true, 
   location: __filename
}