const fs = require("fs");
module.exports.config = {
  name: "aryn",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("aryan") ||
     react.includes("Aryan") || react.includes("ARYAN") || react.includes("aRYN") ||
react.includes("aryn") ||
react.includes("ARYN") ||     
react.includes("Aaryan")) {
    var msg = {
        body: `${name} 𝐌𝐄𝐑𝐄 𝐁𝐎S𝐒 𝐊𝐀 Ñ𝐈𝐂𝐊𝐍𝐀𝐌𝐄 À𝐑𝐘𝐀𝐍 𝐇💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/aryn.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }