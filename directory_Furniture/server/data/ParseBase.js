const fs = require('fs');
const data = require('../data/data');


module.exports = class ParseBase {
    FindUser(mail, password){
        for (let key in data) {
            if (data[key]['mail'] === mail && data[key]['password'] === password ){
                console.log(true);
                return true
            }
        }
        console.log(false);
        return false;
    }
    CreateUser(mail, password){
        let num =  JSON.stringify(data).indexOf(']');
        let nowstr = JSON.stringify(data).slice(0, num) + ',{"mail":"'+mail+'","password":"'+password+'"}' + JSON.stringify(data).slice(num);
        fs.writeFileSync('./server/data/data.json',nowstr,
            function (err, data) {});
    }
};
