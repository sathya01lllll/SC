const qrcode = require('qrcode');
const fs = require('fs');

exports.run = {
   usage: ['generate-qr'],
   hidden: ['qrcode'], 
   use: 'text', 
   category: 'tools', 
   async: async (m, { args, client }) => {
      try {
         const text = args.join(' ');

         if (!text) {
            return client.reply(m.chat, '🚩 Berikan teks untuk membuat QR code.', m);
         }

         const qrCodeData = await qrcode.toDataURL(text);

         // Simpan QR code sebagai gambar (opsional)
         const fileName = `qrcode_${Date.now()}.png`;
         const filePath = `./media/file/${fileName}`;

         await qrcode.toFile(filePath, text);

         // Kirim QR code sebagai pesan
         await client.sendFile(m.chat, filePath, 'qrcode.png', `QR Code untuk: ${text}`, m);

         // Hapus file setelah dikirim (opsional)
         fs.unlinkSync(filePath);

      } catch (e) {
         console.error(e);
         return client.reply(m.chat, 'Terjadi kesalahan dalam menjalankan permintaan Anda.', m);
      }
   },
   error: false,
   owner: true, 
   location: __filename
};