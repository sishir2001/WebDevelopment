// jshint esversion:6
const express = require('express');
const fs = require('fs');

const app = express(); // ! a function that refers to the entire express module .


app.listen(3000,() => {
    console.log("Server started on port 3000");
}); // ! listens to the port 3000 , port is just a channel to listen to .

// ? ROUTES ......
app.get('/',(req,res) =>{
    // * this method tells the what to do when a get request occurs at the / file . 
    res.send('<h1>Hello World</h1>');
});

app.get('/contact',(req,res) =>{
    // * this method tells the what to do when a get request occurs at the /contact file . 
    res.send('Contact me at jaladisishir96@gmail.com');
});

app.get('/about',(req,res) =>{
    // * this method tells the what to do when a get request occurs at the /contact file . 
    res.send('Hey Im Jaladi Saai Sishir');
});

app.get('/hobbies',(req,res) =>{
    // * this method tells the what to do when a get request occurs at the /contact file . 
    res.send('Hobbies ');
});


