const { proto } = require('@adiwajshing/baileys');

exports.run = {
   usage: ['gcsider'],
   hidden: [''],
   use: 'Hanya untuk owner',
   category: 'group',
   async: async (m, { client, Func, isOwner }) => {
      try {
         // Cek apakah perintah dijalankan oleh owner
         if (!isOwner) return client.reply(m.chat, '🚫 Fitur ini hanya dapat digunakan oleh owner!', m);

         // Periksa apakah command digunakan di grup
         if (!m.isGroup) return client.reply(m.chat, '🚩 Fitur ini hanya dapat digunakan dalam grup!', m);

         // Ambil semua anggota grup
         const groupMetadata = await client.groupMetadata(m.chat);
         const participants = groupMetadata.participants;

         // Ambil nomor WhatsApp dari JID setiap anggota
         let memberList = participants.map(p => {
            let jid = p.id.split('@')[0];
            return `◦  ${jid}`;
         }).join('\n');

         // Kirim daftar anggota ke dalam chat
         client.reply(m.chat, `Daftar nomor anggota di grup ini:\n\n${memberList}`, m);
      } catch (e) {
         console.error(e);
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   location: __filename,
   owner: true // Hanya owner yang bisa menggunakan command ini
};
