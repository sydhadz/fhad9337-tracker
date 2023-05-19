const express = require('express'); //import express package

const app = express(); //initalise express framework

app.use(express.static('public')); //Serve static files from the public folder

app.get('/', function(req, res) { // Serve the index file for the root ("/") path
    res.sendFile(__dirname + '/public/index.html')
})

let server = app.listen(8888, function(){ //Start the server, listening for incoming traffic and logging a message to the console
    console.log("App server is running on port 8888");
});

