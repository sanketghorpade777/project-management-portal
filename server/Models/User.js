const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new Schema({

     name:{ type:String , required:false},
    email:{ type:String , required:false},
    password:{ type:String , required:false},
    gender: {type:String , required:false},
    dept: {type:String , required:false},
    profile: {type:String , required:false},
    city: {type:String , required:false},
    address: {type:String , required:false},

},{timestamps:true})

module.exports = mongoose.model('User', userSchema);