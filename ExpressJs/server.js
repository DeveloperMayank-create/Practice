//PART -2 CREATION OF SERVER 

//app.listen() creates server and uses two arguments ,first is Port number and second is Callback Function
// to run server use command 'node fileName' in terminal

const express = require('express')
const app = express()                           //initializing express() in the app variable

app.listen(3000,function(){
    console.log("Server Started");
});




//PART 3 -REQUEST AND RESPONSE USING EXPRESS

// get() is used to display (send response) server on the google chrome , uses two params Route and CallBackFunction
// "/" is treated as default Home Page
// with Route ,we can connect multiple pages to the website
// CallBackFunction() contains two params Request and Respond
// res.send("hii") tells that send "Hii" as respond to server
// localhost:3000 is used to host the server 3000.
// If server get stopped ,in that case we will not get any Hii message on chrome 

app.get("/",function(req,res){
    res.send("Welcome Mayank");
});