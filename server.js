//web server for final

//require the following modules
var express = require('express'),
    app = express(),
    path = require('path');

//tells server here to find website (public/directory)
app.use(express.static(path.join(__dirname, 'public')));

//start server
var server = app.listen(3000);
console.log("server listening at port 3000");
    
