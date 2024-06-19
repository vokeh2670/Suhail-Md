const fs = require('fs-extra')
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_57_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLdFQ2M2Urdngxb25IRDRrM2tFaU81ZVpBWjk3YkllUzdPR1dCSFp5THowPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1NnVmYmRBblQxR1o1SmRqZTlZX3FnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyMzI0YWZmLWMzMmUtNGFmYi1iMzFjLWVhODI1YTg3MzNhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxNTMsXG4gICAgICA4OCxcbiAgICAgIDI0OSxcbiAgICAgIDcwLFxuICAgICAgMTQxLFxuICAgICAgODAsXG4gICAgICAyMTMsXG4gICAgICAyMzksXG4gICAgICAxMSxcbiAgICAgIDI0OCxcbiAgICAgIDE5OCxcbiAgICAgIDIwNixcbiAgICAgIDIzNixcbiAgICAgIDE5NCxcbiAgICAgIDE3OSxcbiAgICAgIDIyNCxcbiAgICAgIDEzMixcbiAgICAgIDkwLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDEyMixcbiAgICAgIDIzLFxuICAgICAgMTI2LFxuICAgICAgMjQyLFxuICAgICAgMTg3LFxuICAgICAgNjcsXG4gICAgICAyMDYsXG4gICAgICA5NyxcbiAgICAgIDcxLFxuICAgICAgMTcyLFxuICAgICAgMTM1LFxuICAgICAgMTc0LFxuICAgICAgMzIsXG4gICAgICAxMzEsXG4gICAgICAxMjksXG4gICAgICA3OCxcbiAgICAgIDExLFxuICAgICAgMTMyLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkJEUldTMTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMzk3Mjc1Mzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkHMt3bMt2nMt27Mt3PMtyBtzZtkzZtcIixcbiAgICBcImxpZFwiOiBcIjE1ODk0ODUwMjA2MTMwNDo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRFE5WXNCRUlxNHpMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlB1N2NXWXhaMEZOdnhoUFpLSkZHK0ZjQUZ5dFpxZ0d0SS9lN1dGNVJjRkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0tML3JwUVJyTzVhSzlWM0dJOEo5MDMyUWJFZlZlT0g4UEdBMzh4Uk1QcnZxTndrNkR3Qm1BVXBLd3lEelJySUNWdE5uemxGMlJNOURlc0ZnMVNORFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid1ViN3BlK0gxZktFMjhmVHZkbFA1Tm5TcWg5VlU5QkRSaE5FY0ZzUzFzeWRmMk9ORlFweHVRMSs1cTMxRlYzTnJaVGlzL3ljOUNMVElyb29kcXVDakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzEzOTcyNzUzOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODgxOTg1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFIZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUhmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGE5K3llUS9DdUdmM2QyUm82RDh0MHgxR3dzd25BQ0Urd2V1VnZIRGplQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTM0MzEzOTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODc4ODM4NTQ5NlwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
