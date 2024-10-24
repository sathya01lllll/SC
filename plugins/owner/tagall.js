exports.run = {
   usage: ['everyone'],
   hidden: ['tagall', 'tg'],
   use: 'text (optional)',
   category: 'owner',
   async: async (m, {
      client,
      text,
      participants,
      Func
   }) => {
      try {
         if (m.isGroup === true) {
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Hello everyone, admin mention you in ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.reply(m.chat, `乂  *E V E R Y O N E*\n\n*“${message}”*\n${readmore}\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`, m)
}
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true
}