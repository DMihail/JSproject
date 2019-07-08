const fs = require('fs');
const data = require('./data');


module.exports = class ParseBase {
    FindUser(mail, password){
        for (let key in data) {
            if (data[key]['mail'] === mail && data[key]['password'] === password){
                return true
            }
        }
        return false;
    }
    CreateUser(Name, LasName, age, mail, password){
        let num =  JSON.stringify(data).indexOf(']');
        let nowstr = JSON.stringify(data).slice(0, num) + ',{"mail":"'+mail+'","password":"'+password+'","name":"'+Name+'","lastname":"'+LasName+'","age":"'+age+'"}' + JSON.stringify(data).slice(num);
        fs.writeFileSync('data.json',nowstr,
            function (err, data) {});

    }
};
// let parse = new ParseBase();
// //console.log(parse.FindUser('test@mail.om', '37428347'));
// //parse.CreateUser('Test', 'Test', '20', 'test@mail.com', '37428347');