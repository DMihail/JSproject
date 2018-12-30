const  mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const  postSchema = new  Schema({
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        default: Date.now
    },
    plan:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        default: Date.now
    }
    });

module.exports = mongoose.model('notes', postSchema);