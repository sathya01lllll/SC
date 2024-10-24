const fetch = require('node-fetch');
const fs = require('fs');
const pdf = require('html-pdf');

exports.run = {
   usage: ['urltopdf'],
   use: 'url1 | url2 | ...',
   category: 'converter',
   async: async (m, { client, text }) => {
      try {
         if (!text) return client.reply(m.chat, 'Provide one or more URLs separated by |', m);

         const urls = text.split('|').map(url => url.trim());

         const htmlContent = await Promise.all(urls.map(async (url, index) => {
            const response = await fetch(url);
            const imageBuffer = await response.buffer();
            const base64Image = imageBuffer.toString('base64');
            return `<img src="data:image/jpeg;base64,${base64Image}" style="max-width:100%;" />`;
         }));

         const html = `<html><body>${htmlContent.join('')}</body></html>`;
         const options = { format: 'A4' };

         pdf.create(html, options).toFile('./output.pdf', (err, res) => {
            if (err) throw err;
            const pdfBuffer = fs.readFileSync('./output.pdf');
            client.sendFile(m.chat, pdfBuffer, 'output.pdf', 'Here is the PDF file', m);
            fs.unlinkSync('./output.pdf'); // Delete the temporary PDF file
         });
      } catch (e) {
         client.reply(m.chat, e.message, m);
      }
   },
   error: false,
   location: __filename
};