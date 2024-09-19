module.exports.config = {

  name: "goiadmin",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "fixed by Chand Tricker",

  description: "Bot will reply tag admin ",

  commandCategory: "Other",

  usages: "",

  cooldowns: 1

};

module.exports.handleEvent = function({ api, event }) {

  if (event.senderID !== "61551474205816") {

    var aid = ["100092750349098"];

    for (const id of aid) {

    if ( Object.keys(event.mentions) == id) {

      var msg = ["TERKO OR KOI KAAM NAHI HAI JAB DEKHO MERE BOSS KO MENTIONE KARTE RAHTE HO😒"];

      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);

    }

    }}

};

module.exports.run = async function({}) {

        }