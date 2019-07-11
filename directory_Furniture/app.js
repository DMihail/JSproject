const express = require('express');
const bodyParser = require('body-parser');
const UserBase = require('./server/data/ParseBase');
const app = express();
var jsonParser = bodyParser.json();
var session = require('express-session');
const list = require('./server/data/list');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public/authorization'));
app.use(express.static('server/data/list.json'));
app.use(express.static('public/furnitureList'));
app.use(express.static('public/furnitureData'));

app.get('/singin', function (req, res) {
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

    }
    else {
        res.sendStatus(500);
    }
});
app.get('/list', function (req, res) {
    res.sendFile(__dirname + "/public/furnitureList/html/List.html");
    //  res.sendFile(__dirname + "/public/furnitureData/html/Data.html");
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
    console.log(req.params.id)
    //res.redirect('/singin');
    //res.location('/singin');
    //res.send(500);
     res.sendFile(__dirname + "/public/furnitureData/html/Data.html");
    // for (let key in  list){
    //     if (list[key]['id'] === req.params.id)  {
    //         console.log(list[key]);
    //         res.status(200).json(list[key]);
    //     }
    // }
    // res.redirect("/SignIn");
    //res.send()
   // res.end();
});


app.get('/gdata/:id', function (req, res) {
    for (let key in  list){
        if (list[key]['id'] === req.params.id)  {
                console.log(list[key]);
                res.status(200).json(list[key]);
            }
        }
});


app.post('/out', function (req, res) {
   // req.session.destroy();
    res.redirect('/singin');
})
app.post('/singup', jsonParser, function (req, res) {
    console.log(req.body);
    let base = new UserBase();
    if (base.FindUser(req.body.mail, req.body.password)){
        console.log(501);
        res.sendStatus(501);
    }
    else {
        base.CreateUser(req.body.mail, req.body.password);
        res.sendStatus(200);
    }

});

app.listen(3000);