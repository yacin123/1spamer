const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["**ماكس ماكس ماكس ماكس ماكس الملك ماكس **]
  setInterval(() => {
other.channels.get("513397023567773707").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NDc5NjAzMTIwNDgyMTU2NTU4.DtHeyA.UyFXi3FEpYEZEc1v09mBFYscfm0")
