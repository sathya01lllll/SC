exports.run = {
   async: async (m, {
      client,
      Func, 
      command, 
      users, 
      isPrefix
   }) => {
      try {
         if (m.text === 'p') {
         let timeChat = 1000 * 1; // 1 menit dalam milidetik 
         let chat = new Date(users.lastchat2 + timeChat);
         let timeout = chat - new Date();
         if (new Date() - users.lastchat > timeChat) {
         client.reply(m.chat, `iya? ada apa?. cuman "p" doang?`, m)
         users.lastchat2 = new Date() * 1;
         }
         }
      } catch (e) {
         return console.log(e)
        // client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   private: true, 
   location: __filename
}