const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
ʜᴇʀᴇ ɪs ᴛʜᴇ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs ғᴏʀ ʟᴏʀᴅ xᴍᴅ

➥*🅛🅞🅡🅓 🅧🅜🅓 Support Channels💗*

➥*Youtube Channel Link:* https://www.youtube.com/@malvintech2 

➥*Github Profile Link:* https://github.com/kingmalvn 

➥*Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

➥👨‍💻◦ https://whatsapp.com/channel/0029VayTeumIN9io4KVkqx28

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/ug2x1y.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
