const { exec } = require('child_process');
const fs = require('fs').promises;
const { PDFDocument } = require('pdf-lib');
const util = require('util');

exports.run = {
   usage: ['pdftoimg'],
   use: 'reply PDF file to convert into images',
   category: 'convert',
   async: async (m, { client, Func }) => {
      try {
         if (!m.quoted || !m.quoted.fileSha256) return client.reply(m.chat, 'Reply to a PDF file', m);

         const pdfBuffer = await client.downloadMediaMessage(m.quoted);
         const pdfPath = `./media/pdf/${m.quoted.id}.pdf`;

         await fs.writeFile(pdfPath, pdfBuffer);

         const outputFolder = `./media/pdf/`;
         const outputPrefix = `${m.quoted.id}`;

         // Use pdf-lib to get the number of pages in the PDF
         const pdfDoc = await PDFDocument.load(pdfBuffer);
         const pageCount = pdfDoc.getPageCount();

         // Use pdftoppm command to convert PDF to images
         const command = `pdftoppm -png -r 300 -f 1 -l ${pageCount} ${pdfPath} ${outputFolder}${outputPrefix}`;
         await exec(command);

         // Promisify setTimeout
         const setTimeoutPromise = util.promisify(setTimeout);

         // Send each image separately
         for (let i = 1; i <= pageCount; i++) {
            const pageNumber = i.toString(); // Remove padding
            const imagePath = `${outputFolder}${outputPrefix}-${pageNumber}.png`;

            // Send image with a consistent name
            await client.sendFile(m.chat, imagePath, `${m.quoted.id}-${pageNumber}.png`, `Page ${i}`, m);

            // Delay for 10 seconds before deleting the file
            // await setTimeoutPromise(10000);

            // Delete the sent image file
            // await fs.unlink(imagePath);
         }

         // Delete the original PDF file
         // await fs.unlink(pdfPath);

         client.reply(m.chat, `✅ PDF successfully converted to images.`, m);
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   location: __filename
};

