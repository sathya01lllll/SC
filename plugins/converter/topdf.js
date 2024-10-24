exports.run = {
   usage: ['topdf'],
   use: 'reply foto',
   category: 'converter',
   async: async (m, { client, Func }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/image/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Image not found.`), m)
         
         let img = await q.download()
         if (!img) return client.reply(m.chat, global.status.wrong, m)
         
         const fs = require('fs');
         const PDFDocument = require('pdfkit');

         let doc = new PDFDocument;

         let pdfPath = 'output.pdf'; // Lokasi file PDF sementara
         let writeStream = fs.createWriteStream(pdfPath);
         doc.pipe(writeStream);

         doc.image(img, 0, 0, { width: 600 });
         doc.end();

         writeStream.on('finish', async () => {
            let outputFile = fs.readFileSync(pdfPath);
            await client.sendFile(m.chat, outputFile, 'image.pdf', 'Here is the PDF file.', m, false, { asDocument: true });
            fs.unlinkSync(pdfPath); // Hapus file PDF sementara setelah terkirim
         });

      } catch (e) {
         return client.reply(m.chat, '🚩 Terjadi masalah saat mengkonversi menjadi pdf', m)
      }
   },
   error: false,
}
