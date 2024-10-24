const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@adiwajshing/baileys");

const products = [
   {
      title: ' *SCRIPT CPANEL*\n',
      description: '> Cek selengkapnya mengenai script Create Panel, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/Vw14B2j/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT CPANEL V2*\n',
      description: '> Cek selengkapnya mengenai script Create Panel V2, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/d6gn4cH/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT BOT STORE - OTOMATIS*\n',
      description: '> Cek selengkapnya mengenai script Bot Store, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/rH40vM7/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT BOT STORE V2 - OTOMATIS*\n',
      description: '> Cek selengkapnya mengenai script Bot Store, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/6NFgCWJ/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT ORDERKUOTA*\n',
      description: '> Cek selengkapnya mengenai script Orderkuota, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/1fM39J0/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT ORDERKUOTA V2*\n',
      description: '> Cek selengkapnya mengenai script Orderkuota V2, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/k9pQ9mn/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT PREMIUM*\n',
      description: '> Cek selengkapnya mengenai script Premium, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/yXb0hgF/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   },
   {
      title: ' *SCRIPT JB (Jual Beli / Jebeh)*\n',
      description: '> Cek selengkapnya mengenai script JeBeh, klik Button di bawah',
      imageUrl: 'https://i.ibb.co/fn7vKSH/image.jpg',
      url: 'https://wa.me//6281329731976?text=BANG+GW+MAU+ORDER'
   }
];

exports.run = {
   usage: ['script'],
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
                           mediaType: 2,
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