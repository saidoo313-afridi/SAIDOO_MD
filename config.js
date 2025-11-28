const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SAIDOO-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElMblRnSE1XVG5maHBzaUpHVXNBZUdsTVlCTEw1NjlVMStBbUJLTk1IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkt5ZzNpdzJEb1RBYTRsd2Q0RXgzUXdnaDlOalJ6MFRQQXRCQzliN2prYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRVFtTXNDNzVZYlBEcVBwTlZueHVyVnNxRXlHRmwxbHRyK2FoNzVCK2tvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkang3OThoRlZDL2NqYXdzMWV2bFJkTVRCQkVESmx2SHE0eldLVkNOR1hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIRzBkYWcwQ1IrRkwxc01aSVQrQzRwRzUzQmU2ODU1UEg1NURVMkg5bVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZaZTFIUjR1TWY4aENBQTZVemFuNE5ZMzVTSGQ0YmdRUEVyV2ZvMWkvUjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUp0RitEM2FrQ0NoUnVtd0tpR0E4bnRuOGpZYnAreWovU3FnZFE3U2hWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjhMVk5MT3pDY1NUWEx0ZkpGOFhPcHMwWEFUK0tZSExtV2V5YkNtcVdWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBySUNGd1lCdHArY1BrVmg0WHg5cEM0eWwxNjB5dlFUd1RGblRoV1VMMk0rRHlzaGplN0FwVVFaMUxHZXgxcXc4L2tGU0NORWR3SkpZS0liSkpLMkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6Ink1RkMxYWpOTlJab21ENEtLS3hsRWpWUHBOQmdxUm1OZSswZEd3dC9vOFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzMwNTM5NTk5MzoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvLrwnZCM8J2fkvCdn5PwnZCT8J2fkfCdkJHgvLsg44OEIiwibGlkIjoiNDg4MjEzNjMwNjkxNzk6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbWRzSklHRU55K3BNa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKQ2ZUTFoyY1VqSUhxdGI3UGRnMUEwdFI5Y05lS0ZqQ2JJQVYxL0xSUWhRPSIsImFjY291bnRTaWduYXR1cmUiOiJwa2NYZ2Z4QlVIaExuNnRNNFhJK1ZTVkRha0pmUnd1enJ5NVgrRHhqUjdraGVzYktFMFM3dFlUV0RTWENjQkRIbzFwV0NJVEVPcjlsdVZmRFg1R2NDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibFVRNjBGeXNON0FKZE14dEdwRkhqNHlxMW9jTTIwRW40QU8rVmo2RDRpaVFHNlhQTWtRRXlNN2N5cUgvdUxnSERSUFlQVlJtdjJjU09GNE1CaVZWQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDUzOTU5OTM6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1FuMHkyZG5GSXlCNnJXK3ozWU5RTkxVZlhEWGloWXdteUFGZGZ5MFVJVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0MzAyNjk3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SAIDOO MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || " 𝙎𝘼𝙄𝘿𝙊𝙊 𝙈𝘿",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙎𝘼𝙄𝘿𝙊𝙊 𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923305395993",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝙎𝘼𝙄𝘿𝙊𝙊 𝙈𝘿*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SaidOo Official❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/VpWpLYgC/tourl-1763379935053.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923305395993",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
