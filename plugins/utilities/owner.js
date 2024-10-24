exports.run = {
   usage: ['owner'],
   async: async (m, {
      client,
      Func, 
      env
   }) => {
      client.owner = client.owner ? client.owner : {}
      let id = m.chat;
      client.owner[id] = [
         await client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Owner'
      }], m, {
         org: env.organisasi_name,
         website: env.website,
         email: env.email
      })
      ]
      Func.delay(500);
      client.reply(m.chat, `Ini kak Owner Ku :)`, client.owner[id][0])
   },
   error: false,
   cache: true,
   location: __filename
}
 