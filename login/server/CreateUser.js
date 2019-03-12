const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const  postSchema = new  Schema({
    login:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    LastName:{
        type:String,
        required: true
    },
    mail:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CreateUser', postSchema);