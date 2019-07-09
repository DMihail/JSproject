const list = require('./server/data/list');


for (let key in list){
       // console.log(list[key]['beds']);
        for (let k in list[key]['beds']) {
             console.log(list[key]['beds'][k]);
        }
}
