.cmd install datetime.js const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "datetime",
    aliases: ["dt"],
    version: "0.2.0",
    author: "Priyanshi Kaur", //Don't Change Author Name Or You Get Free Gban 💀
    countDown: 1,
    role: 0,
    shortDescription: "Displays the current date and time in multiple countries.",
    longDescription: "",
    category: "Date-Time",
    guide: "{prefix}{name} [country]",
    envConfig: {}
  },
  onStart: async function({ message, args }) {
    const countries = {
      "india": {
        timeZone: "Asia/Kolkata",
        language: "Hindi"
      },
      "california": {
        timeZone: "America/Los_Angeles",
        language: "English"
      },
      "bangladesh": {
        timeZone: "Asia/Dhaka",
        language: "Bengali"
      },
      "philippines": {
        timeZone: "Asia/Manila",
        language: "Filipino"
      },
      "united states": {
        timeZone: "America/New_York",
        language: "English"
      },
      "canada": {
        timeZone: "America/Toronto",
        language: "English"
      },
      "united kingdom": {
        timeZone: "Europe/London",
        language: "English"
      },
      "australia": {
        timeZone: "Australia/Sydney",
        language: "English"
      },
      "japan": {
        timeZone: "Asia/Tokyo",
        language: "Japanese"
      },
      "china": {
        timeZone: "Asia/Shanghai",
        language: "Chinese"
      },
      "south korea": {
        timeZone: "Asia/Seoul",
        language: "Korean"
      },
      "germany": {
        timeZone: "Europe/Berlin",
        language: "German"
      },
      "france": {
        timeZone: "Europe/Paris",
        language: "French"
      },
      "italy": {
        timeZone: "Europe/Rome",
        language: "Italian"
      },
      "spain": {
        timeZone: "Europe/Madrid",
        language: "Spanish"
      },
      "russia": {
        timeZone: "Europe/Moscow",
        language: "Russian"
      },
      "brazil": {
        timeZone: "America/Sao_Paulo",
        language: "Portuguese"
      },
      "mexico": {
        timeZone: "America/Mexico_City",
        language: "Spanish"
      },
      "argentina": {
        timeZone: "America/Argentina/Buenos_Aires",
        language: "Spanish"
      },
      "south africa": {
        timeZone: "Africa/Johannesburg",
        language: "Afrikaans"
      },
      "egypt": {
        timeZone: "Africa/Cairo",
        language: "Arabic"
      },
      "indonesia": {
        timeZone: "Asia/Jakarta",
        language: "Indonesian"
      },
      "vietnam": {
        timeZone: "Asia/Ho_Chi_Minh",
        language: "Vietnamese"
      },
      "thailand": {
        timeZone: "Asia/Bangkok",
        language: "Thai"
      }
    };

    let reply = "";
    const country = args[0]?.toLowerCase();

    if (country && countries[country]) {
      const timeZone = countries[country].timeZone;
      const time = moment.tz(timeZone).format("h:mm:ss A");
      const date = moment.tz(timeZone).format("dddd, DD MMMM YYYY");
      reply = `Current Date & Time in ${country.toUpperCase()}: \n` +
             ` 📆 Date: ${date}\n` +
             ` ⌚ Time: ${time}\n\n`;
    } else if (!country) {
      let counter = 0;
      for (const country in countries) {
        if (counter >= 10) break; 

        const timeZone = countries[country].timeZone;
        const time = moment.tz(timeZone).format("h:mm:ss A");
        const date = moment.tz(timeZone).format("dddd, DD MMMM YYYY");
        reply += `Current Date & Time in ${country.toUpperCase()}: \n` +
                 ` 📆 Date: ${date}\n` +
                 ` ⌚ Time: ${time}\n\n`;
        counter++;
      }
    } else {
      reply = "THIS COUNTRY NOT IN DATABASE TRY ANOTHER COUNTRY";
    }

    message.reply(reply);
  },
  onEvent: async function() {}
};