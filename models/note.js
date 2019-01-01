const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const  postSchema = new  Schema({
    title:{
        type: String,
        required: true
    },
    realisation:{
        type:Boolean,
        required: true
    },
    data:{
        type:Date,
        required: true
    }
    });

module.exports = mongoose.model('notes', postSchema);