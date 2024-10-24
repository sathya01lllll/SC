const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@adiwajshing/baileys");

const products = [
   {
      title: ' *PANEL*\n',
      description: '> Paket Panel:\n- 2GB: Rp 2.000/Bulan\n- 3GB: Rp 3.000/Bulan\n- 4GB: Rp 4.000/Bulan\n- 5GB: Rp 6.000/Bulan\n- 6GB: Rp 7.000/Bulan\n- 7GB: Rp 8.000/Bulan\n- 8GB: Rp 9.000/Bulan\n- 9GB: Rp 10.000/Bulan\n- UNLI: Rp 29.000/Bulan',
      imageUrl: 'https://i.ibb.co/bNFF7sk/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+PANEL'
   },
   {
      title: ' *JASA TOP UP*\n',
      description: '> Jasa Top Up untuk berbagai layanan, klik Button di bawah untuk info lebih lanjut.',
      imageUrl: 'https://i.ibb.co/19W3Fkq/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+TOP+UP'
   },
   {
      title: ' *NOKOS*\n',
      description: '> List Harga Nokos:\n- Indonesia: Rp 15K\n- Rusia: Rp 18K\n- Vietnam: Rp 18K\n- Malaysia: Rp 18K\n- India: Rp 18K\n- UAS: Rp 18K\n- Ukraina: Rp 30K\n- Kazakhstan: Rp 50K\n- Thailand: Rp 18K\n- Philipina: Rp 18K\n- United Kingdom: Rp 40K',
      imageUrl: 'https://i.ibb.co/KDTZHyY/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+NOKOS'
   },
   {
      title: ' *SUNTIK SOSMED*\n',
      description: '> Layanan suntik sosial media tersedia. Klik Button di bawah untuk info lebih lanjut.',
      imageUrl: 'https://i.ibb.co/StbxnLZ/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+SUNTIK+SOSMED'
   },
   {
      title: ' *JADI BOT*\n',
      description: '> Ingin memiliki bot sendiri? Klik Button di bawah untuk info lebih lanjut.',
      imageUrl: 'https://i.ibb.co/9ZSnqGz/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+JADI+BOT'
   },
   {
      title: ' *SEWA BOT*\n',
      description: '> List Harga Sewa Bot:\n- 1 Hari: Rp 2.000\n- 2 Hari: Rp 3.000\n- 5 Hari: Rp 5.000\n- 7 Hari: Rp 8.000\n- 10 Hari: Rp 9.000\n- 15 Hari: Rp 13.000\n- 20 Hari: Rp 17.000',
      imageUrl: 'https://i.ibb.co/9ZSnqGz/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+SEWA+BOT'
   },
   {
      title: ' *BOT PUSH KONTAK*\n',
      description: '> Layanan Bot Push Kontak tersedia. Klik Button di bawah untuk info lebih lanjut.',
      imageUrl: 'https://i.ibb.co/9ZSnqGz/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+BOT+PUSH+KONTAK'
   },
   {
      title: ' *OPEN BUAT WEBSITE KATALOG*\n',
      description: '> Kami menyediakan layanan pembuatan website katalog. Klik Button di bawah untuk info lebih lanjut.',
      imageUrl: 'https://i.ibb.co/7S3r91S/image.jpg',
      url: 'https://wa.me//6281329731976?text=.pay+ORDER+WEBSITE+KATALOG'
   }
];

exports.run = {
   usage: ['katalog'],
   category: 'main',
   async: async (m, { client, Func, command, isPrefix }) => {
      try {
         client.sendMessage(m.chat, { react: { text: '🕘', key: m.key } });

         const cards = await Promise.all(products.map(async (product) => {
            const media = await prepareWAMessageMedia({ image: { url: product.imageUrl } }, { upload: client.waUploadToServer });
            return {
               body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: product.description
               }),
               footer: proto.Message.InteractiveMessage.Footer.fromObject({}),
               header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: product.title,
                  hasMediaAttachment: true, 
                  ...media
               }),
               nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                     {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"More Info!","url":"${product.url}","merchant_url":"${product.url}"}`
                     }
                  ]
               })
            };
         }));

         const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
               message: {
                  messageContextInfo: {
                     deviceListMetadata: {},
                     deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                     contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                           newsletterJid: '120363195563833236@newsletter',
                           newsletterName: `SATHYA STORE-Project`,
                           serverMessageId: -1
                        },
                        businessMessageForwardInfo: { businessOwnerJid: client.decodeJid(client.user.id) },
                        forwardingScore: 200,
                        externalAdReply: {
                           title: 'SATHYA STORE',
                           thumbnailUrl: 'https://telegra.ph/file/f7fa56604c6f296c21a8e.jpg',
                           sourceUrl: 'https://telegra.ph/file/f7fa56604c6f296c21a8e.jpg',
                           mediaType: 6,
                           renderLargerThumbnail: true
                        }
                     },
                     body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*`
                     }),
                     footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: ' © SATHYA STORE'
                     }),
                     header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false
                     }),
                     carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: cards
                     })
                  })
               }
            }
         }, { userJid: m.chat, quoted: m });

         client.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id }).then(() => client.sendReact(m.chat, '✅', m.key));
      } catch (e) {
         console.log(e);
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   location: __filename
};
