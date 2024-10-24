exports.run = {
   usage: ['✏️'],
   use: 'send a broadcast message with a catalog link to specified groups',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      prefix,
      command,
      Func
   }) => {
      try {
         // Katalog produk link
         const catalogLink = 'https://wa.me/p/8508214489223870/6281329731976';
         
         // Pesan katalog
         const catalogText = `📢 *SATHYA STORE MENYEDIAKAN* 📢\n\n` +
            `🌟 *Check out our product catalog here:*\n` +
            `${catalogLink}\n\n` +
            `For more details or inquiries, contact us at 6281329731976.`;

         // Daftar ID grup
         const groupIds = [
            '120363280205625216@g.us',
            '120363294862385396@g.us',
            '120363181495247256@g.us',
            '120363288600631675@g.us',
            '120363161249150680@g.us',
            '120363252302163479@g.us',
            '120363298198352469@g.us',
            '120363282551849592@g.us',
            '120363283680189349@g.us',
            '120363149146387996@g.us',
            '120363303075971061@g.us',
            '120363309023449418@g.us',
            '120363302555449261@g.us',
            '120363026876978394@g.us',
            '120363045917634965@g.us',
            '120363263980035753@g.us',
            '120363132861509768@g.us',
            '120363286664446717@g.us',
            '120363283051432032@g.us',
            '120363264260438516@g.us',
            '120363299705207450@g.us',
            '120363297257241064@g.us',
            '120363288929395917@g.us',
            '120363246723509670@g.us',
            '120363149712187795@g.us',
            '120363280370119616@g.us',
            '120363259661955281@g.us',
            '120363156153819292@g.us',
            '120363048687293933@g.us',
            '120363281624665526@g.us'
         ];

         // Fungsi untuk mengirim pesan ke grup
         const broadcastGroups = async () => {
            for (const groupId of groupIds) {
               try {
                  await client.sendMessage(groupId, { text: catalogText });
                  console.log(`Message sent to ${groupId}`);
               } catch (e) {
                  console.error(`Failed to send message to ${groupId}: ${e}`);
               }
            }
         };

         await broadcastGroups();
         client.reply(m.chat, Func.texted('bold', `✅ Catalog broadcasted to groups successfully.`), m);
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   owner: true,
   cache: true,
   location: __filename
}
