const express = require('express'); 
const app = express()
require("app-module-path").addPath(__dirname);
app.use(express.static(__dirname + "/public"));


app.set("view engine", "ejs");

const bot = require('./bot'); 

bot.bottoken()

app.get('/' , function (req, res ) {
    res.render('index')
    // res.send("hellp")
      
    
}) 
  
app.listen(3000 , ()=>{ 
    console.log("server is running on port 3000"); 
})