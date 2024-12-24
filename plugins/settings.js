const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, '../config.cjs');
let config = require(configPath); // Load current config
const { cmd } = require('../command');

cmd({
    pattern: 'setprefix',
    desc: 'Set the command prefix',
    category: 'settings',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!q) return reply('Please specify a prefix.');
    config.PREFIX = q;
    reply(`Prefix has been set to "${q}".`);
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
});

cmd({
    pattern: 'setnews',
    desc: 'Set the news jid',
    category: 'settings',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!q) return reply('Please specify a jid.');
    config.NEWS_JID = q;
    reply(`News Jid has been set to "${q}".`);
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
});

cmd({
    pattern: 'autoreadstatus',
    desc: 'Enable or disable auto-read status',
    category: 'settings',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (q === 'on') {
        config.AUTO_READ_STATUS = true;
        reply('AUTO READ STATUS has been turned ON.');
    } else if (q === 'off') {
        config.AUTO_READ_STATUS = false;
        reply('AUTO READ STATUS has been turned OFF.');
    } else {
        return reply('Please specify "on" or "off".');
    }
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
});

cmd({
    pattern: 'setmode',
    desc: 'Set the bot mode to public,groups,inbox or private',
    category: 'settings',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (q === 'public' || q === 'private' || q === 'groups' || q === 'inbox') {
        config.MODE = q;
        reply(`Bot mode has been set to "${q}".`);
        fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
    } else {
        reply('Please specify "public" or "private" or "groups" or "inbox" for the mode.');
    }
});

cmd({
    pattern: 'setbotnumber',
    desc: 'Set the bot number',
    category: 'settings',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!q) return reply('Please specify a bot number.');
    config.BOT_NUMBER = q;
    reply(`Bot number has been set to "${q}".`);
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
});



// Helper function to create a command that toggles a boolean setting
function createBooleanConfigCommand(setting) {
    return async (conn, mek, m, { from, q, reply , isOwner }) => {
        if (!isOwner) return reply("❌ You are not the owner!");
        try{
        if (q === 'on') {
            config[setting] = true;
            reply(`${setting.replace('_', ' ')} has been turned ON.`);
        } else if (q === 'off') {
            config[setting] = false;
            reply(`${setting.replace('_', ' ')} has been turned OFF.`);
        } else {
            reply(`Please specify "on" or "off" to set ${setting.replace('_', ' ').toLowerCase()}.`);
            return;
        }

        // Save the updated config back to config.cjs
        fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
    }catch(e){
        console.log(e);
        reply(`${e}`)
    }
    };
}

// Register commands for each boolean setting
cmd({
    pattern: 'autovoice',
    desc: 'Enable or disable auto voice messages',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('AUTO_VOICE'));

cmd({
    pattern: 'autosticker',
    desc: 'Enable or disable auto sticker',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('AUTO_STICKER'));

cmd({
    pattern: 'autoreply',
    desc: 'Enable or disable auto-reply',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('AUTO_REPLY'));

cmd({
    pattern: 'autoreact',
    desc: 'Enable or disable auto-reaction',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('AUTO_REACT'));

cmd({
    pattern: 'welcome',
    desc: 'Enable or disable welcome messages',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('WELCOME'));

cmd({
    pattern: 'antibad',
    desc: 'Enable or disable anti-bad language filter',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('ANTI_BAD'));

cmd({
    pattern: 'antibot',
    desc: 'Enable or disable anti-bot protection',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('ANTI_BOT'));

cmd({
    pattern: 'antilink',
    desc: 'Enable or disable anti-link filter',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('ANTI_LINK'));

cmd({
    pattern: 'allwaysonline',
    desc: 'Enable or disable always online mode',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('ALLWAYS_ONLINE'));

cmd({
    pattern: 'moroccoblock',
    desc: 'Enable or disable Morocco block feature',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('MOROCCO_BLOCK'));

cmd({
    pattern: 'readcmd',
    desc: 'Enable or disable Read Cmd feature',
    category: 'settings',
    filename: __filename
}, createBooleanConfigCommand('READ_CMD'));
