const express = require('express');
const router = express.Router();
const  User = require('./CreateUser');
const Hash = require('./Hash');



router.post('/', async (req, res) =>{
    let hashpass = new Hash(req.body.password);
    const Userdata = {
        login: req.body.login,
        password: hashpass,
        name: req.body.name,
        LastName: req.body.LastName,
 //       age: req.body.age,
        mail: req.body.mail
    };

    const  Data = new User(Userdata);
    await  Data.save();
   // res.status(201).json(Data);
});



module.exports = router;