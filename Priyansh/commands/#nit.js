const fs = require("fs");
module.exports.config = {
  name: "nit",
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
  if(react.includes("nitya") ||
     react.includes("Nitya") || react.includes("Aryan ki gf") || react.includes("aryan ki gf") ||
react.includes("owner ki gf") ||
react.includes("Owner ki gf") ||     
react.includes("NITYA")) {
    var msg = {
        body: `${name} 𝐎𝐘𝐄 𝐌𝐄𝐑𝐈 𝐌𝐀𝐋𝐊𝐈𝐍 𝐊𝐎 𝐐 YAAD KIYA 💕✿
न तू छत पे आती न मैं दीवाना होता.!!
न तू पत्थर मारती न मैं काना होता.!!`,attachment: fs.createReadStream(__dirname + `/noprefix/Nit.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
