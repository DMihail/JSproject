const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const  postSchema = new  Schema({
    task:{
        type: String,
        required: true
    },
    // podtask:{
    //     type: String,
    //     required: true
    // },
    realisation:{
        type:Boolean,
        required: false
    },
    data:{
        type:Date,
        required: true
    }
    });

module.exports = mongoose.model('notes', postSchema);