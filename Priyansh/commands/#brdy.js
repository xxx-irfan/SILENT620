const fs = require("fs");
module.exports.config = {
  name: "",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE SILENT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("birthday") ||
     react.includes("Birthday") || react.includes("brdy") || react.includes("Brdy") ||
react.includes("") ||
react.includes("") ||     
react.includes("BIRTHDAY")) {
    var msg = {
        body: `  
🕊️🌸
...
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸
✮☸✮
✮┼🍫┼✮खुदा बुरी नज़र से बचाए आप को
चाँद सितारों से सजाए आप को
गम क्या होता है ये आप भूल ही जाओ
खुदा ज़िन्दगी मे इतना हँसाए आप को
Happy Birthday
☸🎀━━•🧸•━━🎀☸
✮┼🦢┼✮
✮☸✮
☸🌈━━•🤍•━━🌈☸❤️
✮☸✮
✮┼❄️┼✮🥀💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/brdy.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
