const {urlencoded} = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser({extended:false}));
app.use();
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.send("Hello Worlf");
});

app.listen(8000, ()=>{
    console.log("Server Listening on port 8000")
})
