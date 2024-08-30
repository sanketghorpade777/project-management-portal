const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
   
    const mongo_url = process.env.MONGO_URL;
    // console.log(process.env.MONGODB_URL);
    

mongoose.connect(mongo_url);

try{
      await mongoose.connect(mongo_url);
      console.log("Database Connected Successfully")
}catch(error){
     throw error.message;

}


}

module.exports = connectDB;

