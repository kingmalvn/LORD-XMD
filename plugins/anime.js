const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');
const axios = require('axios')
var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."

//====================================================================================
cmd({
    pattern: "loli",
    alias: ["imgloli"],
    react: '🧧',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `🧧 Random loli image

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ..🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '🧧',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `🧧 Random Waifu image

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ..🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "neko",
    alias: ["imgneko"],
    react: '💫',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `🧧 Random neko image

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ..🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
  
//=====================================================================
cmd({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '🧧',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `🧧 Random megumin image

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ..🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '💫',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `🧧 Random maid image

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ...🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.images[0].url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '🧧',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `🧧 Random awoo image

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ..🧑🏻‍💻*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
