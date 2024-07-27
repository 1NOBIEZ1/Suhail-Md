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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09125310881";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrUGhzeFQzbUE0RVFQTHVSeXcyY2VSREE2Z2lpSHM2bloyK3FuQzdQTVFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjUzMTA4ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU1M0VCMzg3Nzk0QUNFQjA4OTdBMjA3OUQ3Q0JBQzkzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA4OTYyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVUEQzTmFIdlRmV0p2RVUwMWNVbU93XCIsXG4gIFwicGhvbmVJZFwiOiBcImJmMWNjZDg2LWRmOWQtNGE1ZC05Yzg4LTA4ZTA0N2UxZWUwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxMjksXG4gICAgICAyLFxuICAgICAgMjIyLFxuICAgICAgMTc0LFxuICAgICAgNjUsXG4gICAgICAyMTUsXG4gICAgICAyMjIsXG4gICAgICA0MSxcbiAgICAgIDEyOSxcbiAgICAgIDQwLFxuICAgICAgMjU1LFxuICAgICAgMTAyLFxuICAgICAgMTUsXG4gICAgICAxNjAsXG4gICAgICAyNTIsXG4gICAgICAxNTksXG4gICAgICAyMDYsXG4gICAgICAyMzMsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyNTIsXG4gICAgICAxNzQsXG4gICAgICAwLFxuICAgICAgMjU0LFxuICAgICAgMTMwLFxuICAgICAgMjUsXG4gICAgICAxNyxcbiAgICAgIDk4LFxuICAgICAgMTI4LFxuICAgICAgMTQzLFxuICAgICAgMTY5LFxuICAgICAgOTYsXG4gICAgICAyMyxcbiAgICAgIDIzMyxcbiAgICAgIDg1LFxuICAgICAgMCxcbiAgICAgIDMwLFxuICAgICAgMjQxLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBKQlBDWkJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI1MzEwODgxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYW11ZWxcIixcbiAgICBcImxpZFwiOiBcIjE0OTYxOTkwMDE2NjI1Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmZ2g0Z0dFSkdCbExVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWROZEhGZnpTejFidURPeEs3blJSNG1GTjlnVGg5eGJ1ZUpSMXlqSDZ6VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsejlzU1dLa2kvZHc0Q2hjTlpBaHF0K1JpanVZbnA5aFNtT0UyOWZHMkwxMlgzV0JjRk5wc2ROWis4QVFvMlpPQ3U0TjkwdU1DaEVWTnlGNkt6NFlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1YnN6bjFnb1NFQ3ZZWXJHUFc4dU95Z05DczQvTWVyRmxrQXgyOUhIY0JFOE5LbDdNZ0xQRGxqVjk3UHFsZXIyUmYxM1R5WFdxYUJNNHdQVzZtM2pqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI1MzEwODgxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA4OTYyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5JSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTklKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVV0WHA2Zjd1ZzcveXpUYTJCYkY0QXdYUVlIeU9wNDd6VjVodmxZb3RFST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI3NTE2OTY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5OTcxMjAxMDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
