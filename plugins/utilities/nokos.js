exports.run = {
   usage: ['nokos'],
   hidden: [''],
   use: '', 
   category: '',
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix
   }) => {
      try {
         client.reply(m.chat, `NOKOS

INDO : 15K

RUSIA : 18K

VIETNAM : 18K

MALAYSIA : 18K

INDIA : 18K

UAS : 18K

UKRAINA : 30k

KAZAKHSTAN : 50K

THAILAND : 18K

PHILIPHINA  : 18K

UNITED KINGDOM : 40kK`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}