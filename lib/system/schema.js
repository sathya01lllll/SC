module.exports = (m, env) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.users.find(v => v.jid == m.sender)
   if (user) {
      if (!isNumber(user.afk)) user.afk = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!('orderkuota_id' in user)) user.orderkuota_id = ''
      if (!('email' in user)) user.email = ''
      if (!('code' in user)) user.code = '' 
      if (!('afkObj' in user)) user.afkObj = {}
      if (!('name' in user)) user.name= m.pushName
      if (!('banned' in user)) user.banned = false
      if (!('ai' in user)) user.ai = false
      if (!('deposit_options' in user)) users.deposit_options = false
      if (!('deposit_options_1' in user)) users.deposit_options_1 = false
      if (!('deposit_options_2' in user)) users.deposit_options_2 = false 
      if (!('stat_password' in user)) user.stat_password = false
      if (!('login' in user)) user.login = false
      if (!('login_password' in user)) user.login_password = false
      if (!('login_username' in user)) user.login_username = false
      if (!('stat_email' in user)) user.stat_email = false
      if (!('stat_username' in user)) user.stat_username = false
      if (!isNumber(user.depo_masuk)) user.depo_masuk = 0
      if (!isNumber(user.ban_temporary)) user.ban_temporary = 0
      if (!isNumber(user.lastchat)) user.lastchat = 0
      if (!isNumber(user.lastchat2)) user.lastchat2 = 0
      if (!isNumber(user.ban_times)) user.ban_times = 0
      if (!isNumber(user.limit)) user.limit = env.limit
      if (!('premium' in user)) user.premium = false
      if (!('orderkuota_deposit' in user)) user.orderkuota_deposit = false
      if (!isNumber(user.orderkuota_deposit_amount)) user.orderkuota_deposit_amount = 0
      if (!isNumber(user.deposit)) user.deposit = 0
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.warning)) user.warning = 0
   } else {
      global.db.users.push({
         jid: m.sender,
     	   afk: -1,
         afkReason: '',
         code: '', 
         ai: false,
         lastchat: 0,
         lastchat2: 0,
         email: '', 
         afkObj: {},
         stat_username: false, 
         stat_password: false, 
         deposit_options: false, 
         deposit_options_1: false, 
         deposit_options_2: false, 
         stat_email: false, 
         login: false, 
         login_username: false, 
         login_password: false,
         name: m.pushName,
         banned: false,
         orderkuota_deposit: false,
         deposit: 0,
         orderkuota_deposit_amount: 0,
         depo_masuk: 0,
         orderkuota_id: '', 
         ban_temporary: 0,
         ban_times: 0,
         limit: env.limit,
         premium: false,
         expired: 0,
         lastseen: 0,
         hit: 0,
         warning: 0
      })
   }

   if (m.isGroup) {
      let group = global.db.groups.find(v => v.jid == m.chat)
      if (group) {
         if (!isNumber(group.activity)) group.activity = 0
         if (!('antidelete' in group)) group.antidelete = false
         if (!('antilink' in group)) group.antilink = false
         if (!('antivirtex' in group)) group.antivirtex = false
         if (!('filter' in group)) group.filter = false
         if (!('left' in group)) group.left = false
         if (!('localonly' in group)) group.localonly = false
         if (!('mute' in group)) group.mute = false
         if (!('viewonce' in group)) group.viewonce = false
         if (!('autosticker' in group)) group.autosticker = false
         if (!('member' in group)) group.member = {}
         if (!('text_left' in group)) group.text_left = ''
         if (!('text_welcome' in group)) group.text_welcome = ''
         if (!('welcome' in group)) group.welcome = false
         if (!isNumber(group.expired)) group.expired = 0
         if (!('stay' in group)) group.stay = false
      } else {
         global.db.groups.push({
            jid: m.chat,
            activity: 0,
            antidelete: false,
            antilink: false,
            antivirtex: false,
            filter: false,
            left: true,
            localonly: false,
            mute: false,
            viewonce: false,
            autosticker: false,
            member: {},
            text_left: '',
            text_welcome: '',
            welcome: true,
            expired: 0,
            stay: false
         })
      }
   }

   let chat = global.db.chats.find(v => v.jid == m.chat)
   if (chat) {
      if (!isNumber(chat.chat)) chat.chat = 0
      if (!isNumber(chat.lastchat)) chat.lastchat = 0
      if (!isNumber(chat.lastseen)) chat.lastseen = 0
   } else {
      global.db.chats.push({
         jid: m.chat,
         chat: 0,
         lastchat: 0,
         lastseen: 0
      })
   }

   let setting = global.db.setting
   if (setting) {
      if (!('autodownload' in setting)) setting.autodownload = false
      if (!('debug' in setting)) setting.debug = false
      if (!('error' in setting)) setting.error = []
      if (!('hidden' in setting)) setting.hidden = []
      if (!('pluginDisable' in setting)) setting.pluginDisable = []
      if (!('signupmode' in setting)) setting.signupmode = false
      if (!('sk_pack' in setting)) setting.sk_pack = 'Sticker by'
      if (!('sk_author' in setting)) setting.sk_author = '© SATHYA STORE'
      if (!('self' in setting)) setting.self = false
      if (!('noprefix' in setting)) setting.noprefix = true
      if (!('antidelete' in setting)) setting.antidelete = true
      if (!('multiprefix' in setting)) setting.multiprefix = false
      if (!('prefix' in setting)) setting.prefix = ['.', '/', '!', '#']
      if (!('toxic' in setting)) setting.toxic = ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"]
      if (!('online' in setting)) setting.online = false
      if (!('autoread' in setting)) setting.autoread = false
      if (!('viewstory' in setting)) setting.viewstory = true 
      if (!('onlyprefix' in setting)) setting.onlyprefix = '.'
      if (!('owners' in setting)) setting.owners = ['6281329731976']
      if (!isNumber(setting.lastReset)) setting.lastReset = new Date * 1
      if (!('msg' in setting)) setting.msg = `Hi +tag 🪸
I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.

◦ *Database* : +db
◦ *Library* : Baileys @neoxr/baileys
◦ *Website* : https://saweria.co/sathyastore
◦ *Source* : https://github.com/YanaMiku

If you find an error or want to upgrade premium plan contact the owner.`
      if (!isNumber(setting.style)) setting.style = 2
      if (!isNumber(setting.refID)) setting.refID = 3
      if (!('cover' in setting)) setting.cover = 'https://i.ibb.co/GRRd5rx/image.jpg'
      if (!('link' in setting)) setting.link = 'https://chat.whatsapp.com/E9zbeP21mia7ZaefgimbAD'
      if (!('qris' in setting)) setting.qris = 'https://i.ibb.co/wdSGH9S/image.jpg'
      if (!('payment' in setting)) setting.payment = `𝐏 𝐀 𝐘 𝐌 𝐄 𝐍 𝐓
   
╭╼
╎∘ Dana :  081329731976
╎∘ Gopay :  081329731976
╎∘ Ovo :  081329731976
╎∘ Bank : BLOM BIKIN「 BCA 」
╎∘ Pulsa :  081329731976「 Simpati 」
╰─━─━─━─━─━─━─━─╼`
   } else {
      global.db.setting = {
         autodownload: false,
         debug: false,
         error: [],
         refID: 3,
         antidelete: true,
         hidden: [],
         pluginDisable: [],
         signupmode: false,
         sk_pack: 'Sticker by',
         sk_author: '© SATHYA STORE',
         autoread: false,
         viewstory: false, 
         self: false,
         noprefix: true,
         multiprefix: false,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
         online: false,
         onlyprefix: '.',
         owners: ['6281329731976'],
         lastReset: new Date * 1,
         msg: `Hi +tag 🪸
I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.

◦ *Database* : +db
◦ *Library* : Baileys @neoxr/baileys
◦ *Website* : https://saweria.co/sathyastore
◦ *Source* : https://github.com/YanaMiku

If you find an error or want to upgrade premium plan contact the owner.`,
         style: 2,
         cover: 'https://i.ibb.co/GRRd5rx/image.jpg',
         link: 'https://chat.whatsapp.com/E9zbeP21mia7ZaefgimbAD', 
         qris: 'https://i.ibb.co/wdSGH9S/image.jpg', 
         payment: `𝐏 𝐀 𝐘 𝐌 𝐄 𝐍 𝐓
   
╭╼
╎∘ Dana :  081329731976
╎∘ Gopay :  081329731976
╎∘ Ovo :  081329731976
╎∘ Bank : BLOM BIKIN「 BCA 」
╎∘ Pulsa :  081329731976「 Simpati 」
╰─━─━─━─━─━─━─━─╼`
      }
   }
}