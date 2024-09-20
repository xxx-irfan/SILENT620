const fs = require("fs");
module.exports.config = {
  name: "dot",
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
  if(react.includes(".") ||
     react.includes("..") || react.includes("...") || react.includes(".....") ||
react.includes("......") ||
react.includes(".......")) {
    var msg = {
        body: `👿À𝐋𝐄 𝐌𝐄𝐑𝐈😘 𝐉𝐀𝐀𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 😂𝐓𝐎 𝐏𝐔𝐑𝐀 𝐋𝐈𝐊𝐇 😔.𝐇𝐄𝐋𝐏 𝐘𝐄𝐒 🥰𝐎𝐑 𝐍𝐎𝐓 😂𝐁𝐔𝐃𝐇𝐔 𝐊𝐀𝐇𝐈 𝐊𝐀𝐀😂`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }