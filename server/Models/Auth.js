const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const authSchema = new Schema({
    userType:{ type:String , required:true},
     name:{ type:String , required:true},
    email:{ type:String , required:true},
    password: {type:String , required:true}

},{timestamps:true})

module.exports = mongoose.model('Auth', authSchema);