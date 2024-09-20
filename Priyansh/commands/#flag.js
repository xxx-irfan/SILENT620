const fs = require("fs");
module.exports.config = {
  name: "flag",
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
        body: `This Is My Prefix ⇉ [ {.} ]\n💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ARYAN🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/profile.php?id=61551474205816`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }