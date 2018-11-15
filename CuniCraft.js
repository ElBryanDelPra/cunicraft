const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "+"
client.on("ready", () => {
   console.log("Encedido!");
});

client.on("message", (message) => {
  if(message.content.startsWith("Hola")){
    message.channel.send("¿Que tal?");
  }else
  if(message.content.startsWith(prefix + "ayuda")) {
       message.channel.send("En Desarrollo...");
  }else
  if(message.content.startsWith(prefix + "tienda")) {
       message.channel.send("http://storecunicraft.buycraft.net/");
  }

});

client.login("NTEyMzEyMzU2MDI2NTgwOTkz.Ds5UBw.-3s5sd8ntPxzEYvCC8RuvIdpdlE");
