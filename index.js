
var express = require("express");
var vechrouter = require("./vehicle");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/vehicle",vechrouter);

app.listen(3537, function(){
    console.log("Server Started on port  " + 3537 );
})

