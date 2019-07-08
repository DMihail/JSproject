const express = require('express');
const bodyParser = require('body-parser');
const UserBase = require('./server/data/ParseBase');
const app = express();
var jsonParser = bodyParser.json();
var fs = require('fs');
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/authorization', function (req, res) {
    res.sendFile(__dirname + "/public/SingIn.html");
});
app.post('/authorization', jsonParser, function (req, res) {
    console.log(req.body);
    let base = new UserBase();
    if (base.FindUser(req.body.mail, req.body.password)){
        res.sendStatus(200);
    }
    else {
        res.sendStatus(500);
    }

});

app.post('/singin', jsonParser, function (req, res) {
    console.log(req.body);
    let base = new UserBase();
    if (base.FindUser(req.body.mail, req.body.password)){
        console.log(501);
       // res.sendStatus(501);
    }
    else {
        res.sendStatus(200);
        base.CreateUser(req.body.name, req.body.lastname, req.body.age, req.body.mail, req.body.password);
        //res.sendStatus(200);
    }

});



app.listen(3000);