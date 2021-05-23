const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.post('/',(req,res)=>{
    const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    const query = req.body.city;
   
    // !logging the searches 
    try{
        fs.appendFile("searchlog.txt",query,(err)=>{
            if(err) throw err;
            console.log("Search Saved");
        });
    }
    catch(err){
        console.log("Caught error while saving the log..");
    }

    // ! for the api.
    const apiKey = "4d41a9eef39f735f061893142af62983&";
    const unit = "metric";
    const WeatherURL = apiEndPoint+'?q='+query+'&appid='+apiKey+'units='+unit;

    https.get(WeatherURL,(response)=>{

        // * this Higher order function lets us do some tasks when it notices data . 

        response.on('data',(data)=>{
            WeatherData = JSON.parse(data);
            let weatherDesciption = WeatherData.weather[0].description;
            let temp = WeatherData.main.temp;
            let icon = WeatherData.weather[0].icon;
            let place  = WeatherData.name;
            const imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The Temp : " + temp +" , in "+place+" </h1>");
            res.write("<p> The description : "+weatherDesciption+"</p>");
            res.write("<img src= "+imgURL+" alt=icon>");
            res.send();
        });

    });

});
// ! all the routing should be done in the server .
app.get('/test.html',(req,res)=>{
    res.sendFile(__dirname + "/test.html");
})

app.listen(3000,()=>{
    console.log("Weather Server listening at 3000");
});
