const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// ! body parser works with express
// ? urlencoded() is the mode used when handling data with form 
app.use(bodyParser.urlencoded({extended:true})); 


// ! route : /
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.post('/',(req,res) => {
    // console.log(req);
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = parseFloat(num1) + parseFloat(num2);
    let resultStr = "Thank you for posting and the result is " + String(result);
    res.send(resultStr);
});

// ! route : /BMIcalculator
app.get('/BMIcalculator',(req,res)=>{
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post('/BMIcalculator',(req,res) => {
    
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let BMI = Math.round(weight/(height*height));

    res.send("The BMI is " + BMI);

});
app.listen(3000,()=>{
    console.log("Server started listening at port 3000");
    console.log(__filename);
});
