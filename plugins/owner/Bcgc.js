exports.run = {
   usage: ['👤'],
   use: 'send a broadcast message to specified groups',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      prefix,
      command,
      Func
   }) => {
      try {
         const catalogText = `📢 *SATHYA STORE Catalog* 📢\n\n` +
            `🌟 *Panel*\n` +
            `- Paket 2GB: Rp 2.000/Bulan\n` +
            `- Paket 3GB: Rp 3.000/Bulan\n` +
            `- Paket 4GB: Rp 4.000/Bulan\n` +
            `- Paket 5GB: Rp 6.000/Bulan\n` +
            `- Paket 6GB: Rp 7.000/Bulan\n` +
            `- Paket 7GB: Rp 8.000/Bulan\n` +
            `- Paket 8GB: Rp 9.000/Bulan\n` +
            `- Paket 9GB: Rp 10.000/Bulan\n` +
            `- Paket UNLI: Rp 29.000/Bulan\n\n` +
            `🌟 *Sewa Bot*\n` +
            `- 1 Hari: Rp 2.000\n` +
            `- 2 Hari: Rp 3.000\n` +
            `- 5 Hari: Rp 5.000\n` +
            `- 7 Hari: Rp 8.000\n` +
            `- 10 Hari: Rp 9.000\n` +
            `- 15 Hari: Rp 13.000\n` +
            `- 20 Hari: Rp 17.000\n\n` +
            `🌟 *Nokos*\n` +
            `- Indonesia: Rp 15K\n` +
            `- Russia: Rp 18K\n` +
            `- Vietnam: Rp 18K\n` +
            `- Malaysia: Rp 18K\n` +
            `- India: Rp 18K\n` +
            `- UAS: Rp 18K\n` +
            `- Ukraine: Rp 30K\n` +
            `- Kazakhstan: Rp 50K\n` +
            `- Thailand: Rp 18K\n` +
            `- Philipina: Rp 18K\n` +
            `- United Kingdom: Rp 40K\n\n` +
            `🌟 *SC botz list* https://sathya01lllll.github.io/teshtmll\n` +
            `💬 *Contact Us:* 6281329731976\n` +
            `🌐 *Visit Our Website:* https://sathyastore.olshopku.com`;

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

         const broadcastGroups = async () => {
            for (const groupId of groupIds) {
               try {
                  await client.sendMessage(groupId, { text: catalogText });
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
