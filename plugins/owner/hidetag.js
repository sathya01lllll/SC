exports.run = {
   usage: ['hidetag'],
   hidden: ['h'], 
   use: 'text',
   category: 'owner',
   async: async (m, {
      client,
      text,
      participants
   }) => {
if (m.isGroup === true) {
      let users = participants.map(u => u.id)
      await client.reply(m.chat, text, null, {
         mentions: users
      })
} 
   },
   owner: true
}