const Jimp = require('jimp');
const QrCode = require('qrcode-reader');
const fs = require('fs').promises;

exports.run = {
   usage: ['readqr'],
   use: 'reply qr',
   category: 'utilities',
   async: async (m, { client, Func }) => {
      try {
         let q = m.quoted ? m.quoted : m;
         let mime = (q.msg || q).mimetype || '';

         if (!/image/.test(mime)) return client.reply(m.chat, Func.texted('bold', '🚩 Image not found.'), m);

         client.sendReact(m.chat, '🕒', m.key);
         let imgBuffer = await q.download();

         // Use Jimp to handle the image
         let image = await Jimp.read(imgBuffer);

         // Use QrCode reader
         const qr = new QrCode();
         qr.callback = async (err, value) => {
            if (err) {
               return client.reply(m.chat, '❌ Failed to read QR code. Please make sure the image contains a valid QR code.', m);
            }

            // Send the QR code value as a reply
            client.reply(m.chat, `🔍 QR Code Value:

${value.result}`, m);
         };

         // Decode the QR code from the image
         qr.decode(image.bitmap);

      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   location: __filename
};