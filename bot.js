const { Telegraf } = require('telegraf');




require('dotenv').config()
const bot = new Telegraf(process.env.TELEGRAF_API , { polling: true });


var photo = 'AgACAgQAAxkBAAM8ZmWnBLTWzA7OQT-711xViGcgSycAAtu-MRuzzjFTkgrWbVR20gMBAAMCAAN4AAM1BA'


async function bottoken() {  

    // bot.use(async (msg, next) => {

    //           console.log(msg.message.photo)
            
    //         }) 

bot.command(["menu" , "start"], async  (msg , next) => {

    // msg.reply(msg.from.chat);
    // const info =  msg.from
    // console.log(info)
    main_bot = true
    const users = msg.chat.id

    console.log("users:" , users)
    

    bot.telegram.sendPhoto(users , photo
      ,{
        caption: ' <b>  🌐 این پروژه در بستر شبکه TON اجرا شده </b>'+'\n'+
        '<b>💎The Open Network (TON) </b>'+'\n\n'+
        '📌 تراکنش خرید شما'+'\n\n'+
     
       '<a href="https://persia-gulf.com/"><b>https://persia-gulf.com</b> </a>',
   
        parse_mode:'HTML',

         
        
         reply_markup: {

        
           
            inline_keyboard : [
              
                          [
                            {text: '💎 buy_token'  , web_app: {url : "https://next3idea.netlify.app/" } }
                            
                          ]
                       
              ]
    
            }})
})


console.log('bot is ok')
bot.launch();

}


module.exports = {
    bottoken 
 }