const fs = require("fs");
module.exports.config = {
  name: "#bhabhi.js",
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
  if(react.includes("Gayatri") ||
     react.includes("Gayatri") || react.includes("@Gayatri Jaiswal") || react.includes("Bhabhi") ||
react.includes("Gayatri") ||
react.includes("Gayatri")) {
    var msg = {
        body: `𝐌𝐀𝐈 𝐁𝐎𝐓 😹𝐇𝐔𝐍 𝐓𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀😛 𝐌𝐀𝐈 𝐁𝐇𝐈 𝐁𝐇𝐀𝐁𝐇𝐈 😆𝐁𝐎𝐋𝐔𝐍𝐆𝐀 𝐆𝐀𝐘𝐀𝐓𝐑𝐈 𝐁𝐇𝐀𝐁𝐇𝐈😸 𝐉𝐀𝐆𝐀𝐓 𝐁𝐇𝐀𝐁𝐇𝐈🤣`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }