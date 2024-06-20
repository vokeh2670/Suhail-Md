weconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c7b687ab84de25922cdcb.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254713972753";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_01_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMDBnRWhQL043eVNqc3hPOTNPcEdnOFRDU3dNZ0VZdUdWSG95aXozYWh2dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY3JlYlQxMWRTNS1XV3NjRkpkdUJsd1wiLFxuICBcInBob25lSWRcIjogXCJmYmYzNDg3Yy1hMmYxLTRmYzctYWIyOS0wZjUzNjJlNThkYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAyMTUsXG4gICAgICAxNTcsXG4gICAgICAxMTIsXG4gICAgICAzMCxcbiAgICAgIDI0MixcbiAgICAgIDgwLFxuICAgICAgNjksXG4gICAgICAyMDEsXG4gICAgICA1MCxcbiAgICAgIDEyMCxcbiAgICAgIDEwMCxcbiAgICAgIDE1OSxcbiAgICAgIDE1LFxuICAgICAgMTQxLFxuICAgICAgNzMsXG4gICAgICA4OCxcbiAgICAgIDE2MSxcbiAgICAgIDE1MixcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE4MSxcbiAgICAgIDEyNCxcbiAgICAgIDk4LFxuICAgICAgMjM0LFxuICAgICAgMTI3LFxuICAgICAgMjE1LFxuICAgICAgOTEsXG4gICAgICAyMTMsXG4gICAgICAxNjUsXG4gICAgICAzNixcbiAgICAgIDIxMCxcbiAgICAgIDI1MCxcbiAgICAgIDEzLFxuICAgICAgNDEsXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICAxMCxcbiAgICAgIDE3MixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHRzM4VFIzWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzg3Mzg2MTY1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDgxMzcyODEyMDk3MToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQLzd1L0VCRU1qR3piTUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVaTGpacFBQZFNjR0NRUjdpcDN2WHpnR0VPUHRDd1p1V1ZoNGFwT0s3VnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0E0NkhzR0E2UnF1MzZob3ZRb0I1WFA3TmlYQUZkNXJUZlZMd29FdWxBUW5iWUJnMDhvQ040NEpyNUYydFovbC8zNzJnMGppbW1FU2tXbW1NbFNyQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTB5L3FSVGpUbkVBMXBONyt2U3F6RUpXem5TeFgxQ0tidGYxY0tsNGRYYTh6TFZkaEJqcUNiT3VmZ1NOUTZQSm9IYXVRK2QrZkZJSldkeEpGYno1Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg3Mzg2MTY1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODM4MDkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDF0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwditsSEYrak1SNkJ3aStBNktESElIN3NGN0tQbU1aeEpvVTZ3ZUNPKzM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwNjM5NjE1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NjM4MDg4MDU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "‌🇦‌𝐕🄸𝐍🅢 ‌🇲‌‌🇩‌",
  ownername:process.env.OWNER_NAME|| "‌🇦‌𝐕🄸𝐍🅢 ‌🇲‌‌🇩‌",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
