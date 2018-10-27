var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/currency', function (req, res) {
    var request = req.body;
    console.log(request);
    res.send('ok');
});
app.listen(3000, function () {
    console.log("Connected successfully to server")
});