/*ʟᴏʀᴅ xᴍᴅ
ᴄʀᴇᴀᴛᴏʀ ᴍᴀʟᴠɪɴ ᴋɪɴɢ
ᴅᴏɴᴛʏ ᴄᴏᴘʏ ᴡɪᴛʜᴏᴜᴛ ɪɴғᴏᴍɪɴɢ ᴍᴇ*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📲",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
*╭┉┉┉┉┅┅┅══════┈┈┈┉┉┉┉*
*╏▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*╏▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*╏▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*╏▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╏▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴛᴇᴄʜ ʟᴏʀᴅ࿐*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
  ─┈┈┄┉┉┉┅┅┅☻┅┅┅┅┉┈┈┈─
*╭━━┉┉━━┉┉━━┉*
*┋☛ ➊ • ᴏᴡɴᴇʀ*
*┋☛ ➋ • ᴄᴏɴᴠᴇʀᴛ*
*┋☛ ➌ • ᴀɪ*
*┋☛ ➍ • sᴇᴀʀᴄʜ*
*┋☛ ➎ • ᴅᴏᴡɴʟᴏᴀᴅ*
*┋☛ ➏ • ᴍᴀɪɴ*
*┋☛ ➐ • ɢʀᴏᴜᴘ*
*┋☛ ➑ • ғᴜɴ*
*┋☛ ➒ • ᴀɴɪᴍᴇ*
*╿☛ ➓ • ᴏᴛʜᴇʀ*
*╰━━┉┉┉━━┉┉━━┉*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅッ*`;

        const vv = await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◀◈╾ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *.ᴏᴡɴᴇʀ*
┋ ➽ *.ʀᴇᴘᴏ*
┋ ➽ *.ꜱʏꜱᴛᴇᴍ*
┋ ➽ *.ꜱᴛᴀᴛᴜꜱ*
┋ ➽ *.ʙʟᴏᴄᴋ*
┋ ➽ *.ᴜɴʙʟᴏᴄᴋ*
┋ ➽ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋ ➽ *.sᴇᴛᴘᴘ*
┋ ➽ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋ ➽ *.ᴊɪᴅ*
┋ ➽ *.ɢᴊɪᴅ*
┋ ➽ *.ʀᴇꜱᴛᴀʀᴛ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 12*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '2':               
                        repl (`◀◈╾ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶

╭────────●●►
┋ ➽ *convert* 
┋ ➽ *ss* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 2*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '3':               
                        reply(`◀◈╾ 𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *ai* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 1*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '4':               
                        reply(`*◀◈╾ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *ᴘʟᴀʏ* 
┋ ➽ *ᴠɪᴅᴇᴏ* 
┋ ➽ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ➽ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ➽ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ➽ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ➽ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 7*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '5':               
                        reply(`*◀◈ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *ᴀᴘᴋ* 
┋ ➽ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ➽ *ɢᴅʀɪᴠᴇ* 
┋ ➽ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ➽ *ғʙ*
┋ ➽ *ɪɢ* 
┋ ➽ *ᴍᴏᴠɪᴇ*
┋ ➽ *soɴɢ* 
┋ ➽ *ᴠɪᴅᴇᴏ* 
┋ ➽ *ᴘʟᴀʏ/ʏᴛ* 
┋ ➽ *ʏᴛ*
┋ ➽ *ᴛɪᴋᴛᴏᴋ* 
┋ ➽ *ɪᴍɢ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 14*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッッ*`);
                        break;
                    case '6':               
                        reply(`*◀◈╾ 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *ᴀʟɪᴠᴇ* 
┋ ➽ *about* 
┋ ➽ *ᴍᴇɴᴜ* 
┋ ➽ *allmenu* 
┋ ➽ *ꜱᴜᴘᴘᴏʀᴛ* 
┋ ➽ *ꜱʏꜱᴛᴇᴍ* 
┋ ➽ *ᴘɪɴɢ* 
┋ ➽ *runtime* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 8*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッッ*`);
                        break;
                    case '7':               
                        reply(`*◀◈╾ 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭────────●●►
┋ ➽ *ᴘʀᴏᴍᴏᴛᴇ* 
┋ ➽ *ᴅᴇᴍᴏᴛᴇ* 
┋ ➽ *ᴋɪᴄᴋ* 
┋ ➽ *ᴀᴅᴅ*  
┋ ➽ *ɢᴇᴛᴘɪᴄ* 
┋ ➽ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ➽ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ➽ *ᴀᴅᴍɪɴs*
┋ ➽ *ɢɴᴀᴍᴇ* 
┋ ➽ *ᴛᴀɢᴀʟʟ* 
┋ ➽ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ➽ *ᴏᴘᴇɴᴛɪᴍʀ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ➽ *ɢʀᴏᴜᴘɪɴғᴏ* 
┋ ➽ *ɢʀᴏᴜᴘʟɪɴᴋ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 15*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                       break;
                    case '8':               
                        reply(`*◀◈╾ 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭┈┉┉┉┉┉┉┈┈┈┈┈┈┈
┋ ➽ *ᴅᴏɢ* 
┋ ➽ *ғᴀᴄᴛ* 
┋ ➽ *ʜᴀᴄᴋ* 
┋ ➽ *ϙᴜᴏᴛᴇ* 
┋ ➽ *ʟᴏʟɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 4*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッッ*`);
                       break;
                    case '9':               
                        repl (`◀◈╾ 𝙰𝙽𝙸𝙼𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈
┋ ➽ .𝚠𝚊𝚒𝚏𝚞
┋ ➽ .𝚗𝚎𝚔𝚘
┋ ➽ .𝚖𝚎𝚐𝚞𝚖𝚒𝚗
┋ ➽ .𝚖𝚊𝚒𝚍
┋ ➽ .𝚊𝚠𝚘𝚘
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 5*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '10':               
                        reply(`*◀◈╾ 𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈▶*

╭┈┈┈┈┉┉┉┉┉┉┉┉┈┈┈
┋➽ *.ᴛʀᴛ*
┋➽ *.ᴀɴɪᴍᴇ*
┋➽ *.ᴍᴏᴠɪᴇ*
┋➽ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
┋➽ *.ɢᴘᴀꜱꜱ*
┋➽ *.ǫᴜᴏᴛᴇ*
┋➽ *.ʀᴇᴘᴏ*
┋➽ *.ᴅᴇꜰɪɴᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 8*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッッ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
