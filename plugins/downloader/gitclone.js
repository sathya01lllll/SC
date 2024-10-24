const simpleGit = require('simple-git');
const { promisify } = require('util');
const { exec } = require('child_process');
const execPromise = promisify(exec);

exports.run = {
  usage: ['gitclone'],
  use: 'url repo', 
  category: 'downloader',
  async: async (m, { client, args, Func, isPrefix, command }) => {
    try {
      const repoUrl = args[0];

      if (!repoUrl) {
        return client.reply(m.chat, Func.example(isPrefix, command, 'https://github.com/YanaMiku-Project/Bot-WhatsApp'), m);
      }

      client.sendReact(m.chat, '🕘', m.key);

      const repoName = repoUrl.split('/').pop().replace('.git', '');

      const downloadPath = `./media/zip/${repoName}`;
      const zipFilePath = `./media/zip/${repoName}.zip`;

      await simpleGit().silent(true)
        .clone(repoUrl, downloadPath);

      // Compress the cloned repository into a zip file
      await execPromise(`zip -r ${zipFilePath} ${downloadPath}`);

      // Add a delay (you can adjust the delay time)
      await new Promise(resolve => setTimeout(resolve, 2000));

      client.sendFile(m.chat, zipFilePath, `${repoName}.zip`, 'Ini Kak Repository Nya', m);

      // Delete the cloned repository and the zip file
      await execPromise(`rm -rf ${downloadPath} ${zipFilePath}`);
      Func.delay(1500);
      client.sendReact(m.chat, '✅', m.key); 
    } catch (e) {
      return console.log(`❌ Terjadi kesalahan: ${e.message}`);
    }
  },
  error: false,
  private: true,
  owner: true, 
  location: __filename,
};

