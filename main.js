const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys");
const fs = require('fs');
const pino = require('pino');
const chalk = require('chalk');
const readline = require("readline");
const figlet = require('figlet');
const _ = require('lodash');
const { Boom } = require('@hapi/boom');
const PhoneNumber = require('awesome-phonenumber');
const { color } = require('./lib/color');
const { await } = require('./lib/myfunc');
const open = require('open'); // Tambahkan modul open
const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 150;

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};


async function startBotz() {
    const { state, saveCreds } = await useMultiFileAuthState('auth');
    const socket = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000, 
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000, 
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ['Ubuntu', 'Chrome', '20.0.04']
    });

    console.log('Join Group Owner...');
    await open('https://whatsapp.com/channel/0029ValD4IA9MF8ypTzTvM42');
    console.log(' ');

    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 10 seconds

    let isConnected = false;
    let retryCount = 0;
    const phoneNumber = await question('Masukkan Nomor Bot Target, For Example: 6283857564133 :\n');

    if (!socket.authState.registered) {
        while (!isConnected) {
            try {
                let pairingCode = await socket.requestPairingCode(phoneNumber);
                pairingCode = pairingCode.match(/.{1,4}/g)?.join('-') || pairingCode;
                console.log(chalk.green.bold('Pairing Code: ' + pairingCode));
                retryCount++;
                if (retryCount >= 1000) {
                    console.log(chalk.yellow('Sudah mengirim 1000 kode, menunggu 30 detik sebelum melanjutkan...'));
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 30 seconds
                    retryCount = 0;
                }
                await new Promise(resolve => {
                    const timeout = setTimeout(() => {
                        if (!isConnected) {
                            console.log(chalk.red('Mengirim ulang code'));
                            resolve();
                        }
                    }, 1000);
                    socket.ev.on('connection.update', update => {
                        if (update.connection === 'open') {
                            isConnected = true;
                            clearTimeout(timeout);
                            console.log('Berhasil terhubung!');
                            resolve();
                        }
                    });
                });
            } catch (error) {
                console.log(chalk.red('Error generating pairing code: ' + error));
                console.log(chalk.bold('Menunggu 10 detik sebelum mencoba lagi...'));
                await new Promise(resolve => setTimeout(resolve, 1000)); 
            }
        }
    }

    socket.ev.on('connection.update', async update => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let error = new Boom(lastDisconnect?.error)?.output.statusCode;
            if ([DisconnectReason.badSession, DisconnectReason.connectionClosed, DisconnectReason.connectionLost, DisconnectReason.connectionReplaced, DisconnectReason.restartRequired].includes(error)) {
                console.log('Koneksi ditutup, mencoba kembali...');
                startBotz();
            }
        } else if (connection === 'open') {
            console.log('[Connected] ' + JSON.stringify(socket.authState.id, null, 2));
        }
    });

    socket.ev.on('creds.update', saveCreds);
}

startBotz();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});