// BASIC FRAME WORK FOR A SERVER REQUIRES

const express = require('express');

// init express -> set a variable "app" to express method
const app = express();

// Create endpoints/route handlers


app.get(`/`, function(req, res) { // Accepting a get request from index "/", followed by a CALLBACK FUNCTION that takes a request and response.
    res.send('Hello World!'); //when you get a request, send (display "Hello World!")
})

//Listen on a port
app.listen(3000);

/*
- app.get() / load pages ; fetch from database (mongoDB) ; return JSON
- app.post()
- app.put()
- app.delete()

// Express has a router - to store routes in seperate files



// WITH EXPRESS
// All you have to do is write a few lines of code in your index.html to be able to make a working server and access different pages that you can then work on.
- Usually static website is not what you want
- Use express to connect to apis
- render templates, dynamic apps



*/