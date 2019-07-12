const express = require('express');
const bodyParser = require('body-parser');
const UserBase = require('./server/data/ParseBase');
const app = express();
var jsonParser = bodyParser.json();
const list = require('./server/data/list');

app.use(express.static('public/authorization'));
app.use(express.static('server/data/list.json'));
app.use(express.static('public/furnitureList'));
app.use(express.static('public/furnitureData'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/authorization/html/SingIn.html");
});


app.get('/singup', function (req, res) {
    res.sendFile(__dirname + "/public/authorization/html/SingUp.html");
});


app.post('/singin', jsonParser, function (req, res) {
    console.log(req.body);
    let base = new UserBase();
    if (base.FindUser(req.body.mail, req.body.password)){
        res.sendStatus(200);
        app.get('/list', function (req, res) {
            res.sendFile(__dirname + "/public/furnitureList/html/List.html");
        });
    }
    else {
        res.sendStatus(500);
    }
});

app.get('/getlist', function (req, res) {
    let ul = {};
    for (let key in  list){
         ul[key] = {
              "id" : list[key]['id'],
              "img" : list[key]['view'],
              "name" : list[key]['name']
          }
    }
           res.status(201).json(ul);
});
app.get('/list/:id', function (req, res) {
    console.log(req.params.id);
     res.sendFile(__dirname + "/public/furnitureData/html/Data.html");
});


app.get('/gdata/:id', function (req, res) {
    for (let key in  list){
        if (list[key]['id'] === req.params.id)  {
                console.log(list[key]);
                res.status(200).json(list[key]);
            }
        }
});

app.post('/singup', jsonParser, function (req, res) {
    let base = new UserBase();
    if (base.CreateUser(req.body.mail, req.body.password)){
        res.sendStatus(200);
    }
    else {
        res.sendStatus(501);
    }

});

app.listen(3000);