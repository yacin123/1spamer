const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "Id server"; // 510860891496120321
var channel = "id room";//513285599470551051
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam ,  , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , **')
    },400);
})

client.login(NDgzNjg2MTcyMjIxMjQzNDAy.DtFigg.2OYRrIM8CgjfNkQpoNZnTPxjto4);
