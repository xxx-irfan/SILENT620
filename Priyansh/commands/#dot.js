const fs = require("fs");
module.exports.config = {
  name: "dot",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SILENT PRINCE ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("THARKI") ||
     react.includes("tharki") || react.includes("...") || react.includes("Tharki") ||
react.includes("lanti") ||
react.includes("Lanti")) {
    var msg = {
        body: `🤯𝐓𝐇𝐀𝐑𝐊𝐈 𝐓𝐄𝐑𝐀 💩𝐁𝐀𝐀𝐏 𝐓𝐇𝐀𝐑𝐊𝐈 𝐓𝐄𝐑𝐀 𝐃𝐀𝐃𝐀 𝐓𝐇𝐀𝐑𝐊💀𝐈 𝐓𝐄𝐑𝐀 𝐏𝐔𝐑𝐀🤡 𝐊𝐇𝐀𝐍𝐃𝐀𝐍 𝐓𝐇𝐀𝐑𝐊𝐈 🤠😂`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }