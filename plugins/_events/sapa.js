const moment = require('moment-timezone');

exports.run = {
    async: async (m, {
        client,
        Func,
        command,
        users,
        env,
        isPrefix
    }) => {
        try {
            const timeChat = 3600000 * 1; // 1 menit dalam milidetik
            const lastChatTime = new Date(users.lastchat + timeChat);
            const timeout = lastChatTime - new Date();

            const buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "My Website",
                    url: env.website,
                    merchant_url: env.website
                })
            }, {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                    title: 'Product',
                    sections: [{
                        title: 'SATHYA STORE Customer Service',
                        rows: [{
                            title: 'Produk',
                            description: `Untuk menampilkan daftar produk & layanan`,
                            id: `.produk`
                        }]
                    }, {
                        rows: [{
                            title: 'Script Bot',
                            description: `Untuk menampilkan daftar script bot`,
                            id: `.script`
                        }]
                    }, {
                        rows: [{
                            title: 'Chat AI Service',
                            description: `AI jawab Otomatis Mengenai Produk Jualan`,
                            id: `.chatbot`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'Payment',
                            description: `Detail Pembayaran`,
                            id: `.pay`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'List Panel',
                            description: `Menampilkan List Produk Panel`,
                            id: `.panel`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'List Harga Sewa',
                            description: `Menampilkan Harga Sewa Bot`,
                            id: `.sewa`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'Format Need',
                            description: `Menampilkan Format Need`,
                            id: `.need`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'Format JP',
                            description: `Menampilkan Format Jasa Post`,
                            id: `.jp`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: 'Nokos',
                            description: `List Nomor Kosong`,
                            id: `.nokos`
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }, {
                        rows: [{
                            title: '',
                            description: `s`,
                            id: ``
                        }],
                        highlight_label: 'SATHYA STORE.AI'
                    }]
                })
            }];

            if (new Date() - users.lastchat > timeChat) {
                await client.sendMessageModifyV2(m.chat, `🛍️ Hallo @${m.sender.replace(/@.+/g, '')}, SATHYA STORE DI SINI ADA YG BISA SAYA BANTU? 

𝗢𝘂𝗿 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 & 𝗢𝘂𝗿 𝗦𝗲𝗿𝘃𝗶𝗰𝗲
• Script Bot
• Sewa Bot
• Panel Pterodactyl
• Nokos
• suntik sosmed
• web katalog
• top up game
• transfer saldo

${global.footer}`, 'Customer Service', {
                    largeThumb: true,
                    thumbnail: global.db.setting.cover,
                    url: global.db.setting.link,
                    ads: true
                });
                
                await client.sendIAMessage(m.chat, buttons, null, {
                    header: '*— Informasi Tambahan*\n',
                    content: `Jam Operasional :
*Senin - Sabtu (06:00 - 22:00 WIB)*
*Minggu (07:00 - 21:00 WIB)*

Jika ada pertanyaan silahkan tinggalkan pesan / kirim pesan ke email : ${env.email}. Admin akan menjawab ketika online

Jika memiliki pertanyaan tentang produk jualan kami, Silahkan aktifkan *AI Service* untuk membantu menjawab beberapa pertanyaan mengenai produk jualan kami.

~ Pesan "P" tidak akan *Admin Balas*`,
                    footer: global.footer,
                    media: ''
                });
                
                users.lastchat = new Date().getTime();
            }
        } catch (e) {
            console.log(e);
            client.reply(m.chat, Func.jsonFormat(e), m);
        }
    },
    error: false,
    private: true,
    location: __filename
};
