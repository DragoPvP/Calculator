const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1 + num2;

    res.send("The result is " + results);
});

app.get("/bmiCalculator", (req, res) => {
    
    res.sendFile(__dirname + "/bmiCalculator.html");
    
});
 
app.post("/bmiCalculator", (req, res) => {
    
    var Weight = parseFloat(req.body.Weight);
    var Height = parseFloat(req.body.Height);
    var bmi = Math.round(Weight / (Height * Height));
 
    
    res.send("Your BMI Calculation is " + bmi);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});