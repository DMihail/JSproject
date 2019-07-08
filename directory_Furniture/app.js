const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var jsonParser = bodyParser.json();
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/', function (req, res) {
    res.sendFile(__dirname + "public/index.html");

});
app.post('/', jsonParser, function (req, res) {
    console.log(req.body);
    res.send('welcome, ')
});

app.listen(3000);