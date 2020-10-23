//Import some packages needed
const moment = require('jalali-moment');
const Discord = require('discord.js');
const chalk = require('chalk');
const prefix = require('./Config.json');
const bot = new Discord.Client();

//log in message
bot.once('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
});


//Status
bot.on('ready', () => {
  setInterval(() => {
      bot.user.setActivity(` ⏰ ${moment().locale('fa').format('HH : mm')}`);
      
      bot.user.setActivity("My Developer Is SPHR#1000");
  }, 7000);
});





//commands
bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'time') {
    const Embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setTitle('Time Now')
      .setURL('https://time.ir')
      //	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      //	.setDescription('Some description here')
      .setThumbnail('https://image.flaticon.com/icons/png/512/1069/1069152.png')
      .addFields(
        { name: '====================', value: '⠀' },
        { name: `📅 Date  :  ${moment().locale('fa').format('YYYY/M/D')}`, value: '⠀'},
        { name: `⏰ Clock  :  ${moment().locale('fa').format('HH : mm')}`, value: '⠀'},
        { name: '====================', value: '⠀' },
        { name: `📆 Day Of Week  :  ${moment().locale('fa').format('ddd')}`, value: '⠀', inline: false },
        { name: `📆 Month : ${moment().locale('fa').format('MMMM')}`, value: '⠀', inline: false },
        { name: `📆 Month Of Year  :  ${moment().locale('fa').format('MM')}`, value: '⠀', inline: false },
        { name: `📆 Day of Month  :  ${moment().locale('fa').format('DD')}`, value: '⠀', inline: false },
        { name: '====================', value: '⠀' },
        { name: `📰 Year  :  ${moment().locale('fa').format('YYYY')}`, value: '⠀', inline: false },
        { name: `📰 Day of Year  :  ${moment().locale('fa').format('DDDD')}`, value: '⠀', inline: false },
        { name: '====================', value: '⠀' },
      )
      //	.addField('Inline field title', 'Some value here', true)
      //	.setImage('https://i.imgur.com/wSTFkRM.png')
      //	.setTimestamp()
      .setFooter('👨🏾‍💻 Bot Developer : SPHR#1000');


    message.channel.send(Embed)
  }

  if (command === 'link') {
    const msg1 = ":anger:  :100:  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀:100:  :anger: \n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ :desktop: ⠀`Discord Tools`⠀ :desktop: \n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀:radioactive: ⠀`Discord Cheats`⠀ :radioactive: \n\n ⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀:warning: ⠀`Discord Hack`⠀ :warning: \n\n ⠀⠀ ⠀⠀ ⠀  ⠀⠀⠀`And Other Cheats And Tools...`\n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀||@everyone   @here|| \n\n:arrow_down:⠀⠀⠀⠀⠀⠀  :small_blue_diamond: https://discord.gg/JTRfPtb :small_blue_diamond:⠀⠀⠀⠀⠀⠀⠀:arrow_down:"
    message.channel.send(msg1)
  }
});






//ready message
bot.on('ready', () => {
  console.log(chalk.greenBright("[READY]"));
});

//log in
bot.login(process.env.TOKEN);
