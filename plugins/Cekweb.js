const axios = require('axios');
const dns = require('dns');

exports.run = {
  usage: ['cekweb'],
  category: 'utilities',
  async: async (m, { client, Func, args }) => {
    try {
      if (args.length === 0) {
        return client.reply(m.chat, 'Please provide a website URL.', m);
      }

      const websiteUrl = args[0].replace(/https?:\/\//, '').replace(/\/$/, '');

      // Check website status
      const checkWebsiteStatus = async (url) => {
        try {
          const response = await axios.get(`https://${url}`);
          if (response.status === 200) {
            return `Website ${url} is UP`;
          } else {
            return `Website ${url} is DOWN`;
          }
        } catch (error) {
          return `Website ${url} is DOWN or unreachable.`;
        }
      };

      // Get IP address of the website
      const getWebsiteIP = async (url) => {
        return new Promise((resolve, reject) => {
          dns.lookup(url, (err, address) => {
            if (err) {
              reject(`Couldn't resolve IP for ${url}`);
            } else {
              resolve(address);
            }
          });
        });
      };

      // Execute status check and IP lookup
      const status = await checkWebsiteStatus(websiteUrl);
      const ipAddress = await getWebsiteIP(websiteUrl);

      // Respond with the status and IP address
      client.reply(m.chat, `Status: ${status}\nIP Address: ${ipAddress}`, m);
    } catch (e) {
      console.log(e);
      client.reply(m.chat, Func.jsonFormat(e), m);
    }
  },
  error: false,
  owner: false,
  location: __filename
};
