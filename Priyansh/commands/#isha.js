const fs = require("fs");
module.exports.config = {
  name: "isha",
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
  if(react.includes("isha") ||
     react.includes("ISHA") || react.includes("Isha Khan") || react.includes("iSHA") ||
react.includes("Isha") ||
react.includes("ISHA") ||     
react.includes("isha")) {
    var msg = {
        body: `${name}💐𝐀𝐋𝐄 𝐌𝐎𝐑𝐈 𝐌𝐀𝐈𝐘𝐀 𝐘𝐄𝐇 𝐈𝐒𝐇𝐀 𝐇𝐀𝐈 𝐌 𝐓𝐎 𝐃𝐀𝐑 𝐆𝐀𝐘𝐀💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Isha.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
