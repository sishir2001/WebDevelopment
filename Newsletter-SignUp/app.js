const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); // ! don't know abt this .

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// ! route : /
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});
app.post('/',(req,res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    
});



app.listen(3000,()=>{
    console.log("mail server listening on port : 3000");
});