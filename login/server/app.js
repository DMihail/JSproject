const  express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
let router = express.Router();
const Hash = require('./Hash');
const  User = require('./CreateUser');
//const  newUser = require('./CreateUser');
const  keys = require('./keys');
const app = express();
app.use(bodyparser.json());

 mongoose.connect(keys())
     .then(() => {
         console.log('connect');
     })
     .catch(err => console.error(err));
const port = process.env.PORT || 3000;
const Loginng = path.join(__dirname + 'login');
//app.use('/login', Loginng);
app.use('/login', express.static(__dirname + "/login"));
app.use('/create_user', express.static(__dirname + "/CreateUser"));
app.get('/login' , function (req, res) {
  res.sendFile(__dirname + '/login/log_in.html');
});
app.get('/create_user' , function (req, res) {
    res.sendFile(__dirname + '/CreateUser/create.html');
});
app.post('/login', function (req, res) {
//    console.log(req.body);
  let login =  req.body.login;
  let pass = req.body.password;

    res.sendStatus(200);
});
app.post('/create_user', function (req, res) {
    console.log(req.body);
     let hashpass = new Hash(req.body.password);
 //  router.post('/', async (req, res) =>{

        const Userdata = {
            login: req.body.login,
            password: hashpass.createHash(),
            name: req.body.name,
            LastName: req.body.LastName,
           // age: req.body.age,
            mail: req.body.mail
        };

        const  Data = new User(Userdata);
        Data.save();
        res.status(201).json(Data);
  //  });

    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});




