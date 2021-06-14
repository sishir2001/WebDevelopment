const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const ejs = require('ejs');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Hello Worlf");
});

app.listen(3000, ()=>{
    console.log("Server Listening on port 3000")
})
