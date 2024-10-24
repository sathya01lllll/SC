 const JavaScriptObfuscator = require("javascript-obfuscator");
exports.run = {
usage: ['enc'],
category: 'owner',
async: async (m, { func, client, isPrem }) => {

if (!m.quoted) return m.reply(`*• Example :*.enc*[reply code]*`);
  const message = await Encrypt(m.quoted.text);
  return m.reply(message);
}
}
async function Encrypt(query) {
  const obfuscationResult = JavaScriptObfuscator.obfuscate(query);
  let encryptedCode = obfuscationResult.getObfuscatedCode();
  return encryptedCode;
}

async function Decrypt(encryptedCode) {
  const decryptedCode =
    JavaScriptObfuscator.obfuscate(encryptedCode).getObfuscatedCode();

  return decryptedCode;
}
