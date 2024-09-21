const fs = require("fs");
module.exports.config = {
  name: "prefix",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Prefix") ||
     react.includes("prefix") || react.includes("PREFIX") || react.includes("prefix kya hai") ||
react.includes("PREFIX KYA HAI") ||
react.includes("Prefix kya hai ")) {
    var msg = {
        body: `💐𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀𝐑𝐘𝐀𝐍 𝐁𝐎𝐓 𝐃𝐄𝐀𝐑💐
        💐𝐓𝐇𝐈𝐒 𝐈𝐒 𝐌𝐘 𝐏𝐑𝐄𝐅𝐈𝐗 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍💐⇉ [ {.} ]\n💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐☜ 💫\n🖤𝐘𝐎𝐔 𝐂𝐀𝐍 𝐂𝐀𝐋𝐋 𝐇𝐈𝐌 𝐏𝐑𝐈𝐍𝐂𝐄 À𝐋𝐒𝐎🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/profile.php?id=100092750349098`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
