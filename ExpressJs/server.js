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







//PART 4 - CREATION OF ROUTE

//Search "localhost:3000/about" to see the changes
//we just changed the parameters of get() function

app.get("/about",function(req,res){
    res.send("Welcome Mayank, it's a new route that is displaying");
});
app.get("/services", function(req,res){
    res.send("This is services section of the website")
});





//PART 5 - SENDING HTML FILES TO SERVER

//we use the sendFile() function and inside it we put the path of the file
//we can use "__dirname + 'fileName' " to easily write the file path (double underscore)

app.get("/indexFile", function(req,res){
    res.sendFile(__dirname + "/index.html");
});