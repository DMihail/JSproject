var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function get(req, res) {
   var request = req.body;
   console.log(request);
       if (finde(request) != '') {
           console.log('find');
       }
       else {
           console.log('add');
           add(request);
           res.sendStatus(200);
       }
    });

app.get('/input', function (req, res) {
    db.collection('request').find().toArray(function (err, docs) {
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(docs);
        res.send(docs);
    });
});

app.put('/:VideoId', function (req, res) {
    db.collection('request').findOne({VideoId: req.params.VideoId}, function (err, docs) {
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        if (docs) {
            res.send(docs);
            console.log(ask);
        }
        else{
            console.log(ask)
        }
    });
});

function finde(req){
    db.collection('request').find(req, function (err, docs) {
        if (err){
            console.log(err);
        }
        console.log(req);

});
}

function add(req){
    db.collection('request').insertOne(req , function (err) {
                if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    });
}

MongoClient.connect('mongodb://localhost:27017/4',  function(err, database) {
   if (err)  {
       return console.log(err);
   }
   db = database;
    app.listen(3000, function () {
        console.log("Connected successfully to server")
    });

});
