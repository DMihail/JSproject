const express = require('express');
const bodyParser = require('body-parser');
const UserBase = require('./server/data/ParseBase');
const app = express();
var jsonParser = bodyParser.json();
var session = require('express-session');

app.use (session ({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));
app.use(express.static('public/authorization'));
app.use(express.static('server/data/list.json'));
app.use(express.static('public/furnitureList'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

        res.redirect('/list');
    }
    else {
        res.sendStatus(500);
    }
});
app.get('/list', function (req, res) {
    res.sendFile(__dirname + "/public/furnitureList/html/List.html");
});
app.get('/getlist', function (req, res) {
    const list = require('./server/data/list');
            res.status(201).json(list);
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
        base.CreateUser(req.body.name, req.body.lastname, req.body.age, req.body.mail, req.body.password);
        res.sendStatus(200);
    }

});

app.listen(3000);