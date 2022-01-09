const Discord = require("discord.js");
const jano = new Discord.Client();
//////// playing or dnd  streaming ////////
jano.on("ready", (7ama) => {
  console.log(`Online In Servers`);
  let statuses = [`7ama`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
jano.on("ready", (7ama up) => {
  var join = jano.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne
jano.login("ODM1NDY4MTE0Njk0MjQyMzA0.Ydr-DA.TDxCnHhD1FrPahzCsWHLQFq263w");
