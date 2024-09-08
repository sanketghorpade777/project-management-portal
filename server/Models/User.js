const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const userSchema = new Schema({
    user_id:{ type:String , required:true},
     name:{ type:String , required:true},
    email:{ type:String , required:true},
    gender: {type:String , required:true},
    dept: {type:String , required:true},
    profile: {type:String , required:true},
    city: {type:String , required:true},
    address: {type:String , required:true},

},{timestamps:true})

module.exports = mongoose.model('User', userSchema);