const fs = require('fs').promises;
const path = require('path');

exports.run = {
  usage: ['cleartemp'],
  category: 'owner', 
  async: async (m, { client }) => {
    try {
      const tempFolderPath = './temp';

      // Check if the 'temp' folder exists
      const tempFolderExists = await fs.access(tempFolderPath).then(() => true).catch(() => false);

      if (!tempFolderExists) {
        throw '❌ Tidak ada media yang tersimpan di folder temp.';
      }

      // Read all files and folders in the 'temp' folder
      const filesAndFolders = await fs.readdir(tempFolderPath);

      // Loop through files and folders and delete all except ".file"
      for (const item of filesAndFolders) {
        const itemPath = path.join(tempFolderPath, item);

        if (item !== '.file') {
          // Check if it's a directory (folder) and delete recursively
          const isDirectory = (await fs.stat(itemPath)).isDirectory();

          if (isDirectory) {
            await fs.rmdir(itemPath, { recursive: true });
          } else {
            await fs.unlink(itemPath);
          }
        }
      }

      return client.reply(m.chat, '✅ Media pada folder temp berhasil dihapus.', m);
    } catch (e) {
      return client.reply(m.chat, `🚩 ${e}`, m);
    }
  },
  error: false,
  owner: true, 
  location: __filename,
};