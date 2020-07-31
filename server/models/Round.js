const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundSchema = mongoose.Schema({
    
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type:String,
        maxLength: 50 
    },
    course: {
        type: String
    },
    date: {
        type: Date
    },
    holes : {
        type:Number,
        default: 18,
        maxValue: 18 
    },
    par : {
        type: String,
        default: 72
    },
    score :{
        type: Number
    },
}, {timestamps: true})


const Round = mongoose.model('Round', roundSchema);

module.exports = { Round }