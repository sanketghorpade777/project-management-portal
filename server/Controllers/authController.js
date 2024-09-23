const Auth = require('../Models/Auth');
const jwt = require("jsonwebtoken");
const {comparePassword} = require('../Helpers/auth');
const multer = require('multer');
const User = require('../Models/User');
const path = require('path');

const login = async(req,res) => {
  try{
  const {username,password,usertype} = req.body;
 

      const userDetails = await Auth.findOne({email:username});

      if(!userDetails){
        res.status(400).send({message:" Record Not Found" , success:false});
      }

      const verifyPassword =  await comparePassword(password,userDetails.password);
       if(verifyPassword && usertype === userDetails.userType){

        const token = await jwt.sign({ userId: userDetails._id }, process.env.JWT_SECREAT);
       return res.status(200).send({ success:true,message:"Login Successful",token:token,data:userDetails});

      
       



    
    }
  
    res.status(400).send({message:" Empty Fields" , success:false});


  }catch(err){
      res.status(400).send({message:"Something Went Wrong" , success:false});
  }


}












const Add_employee = (req,res) => {
  try{
  let fileName = req.body;
  console.log(req.body);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("from upload",req);
    cb(null, 'uploads/profiles'); // The folder where files will be saved
  },
  filename: function (req, file, cb) {
    const unique_name = Date.now() + path.extname(file.originalname);
    cb(null,unique_name);
  },
});



let uploads = multer({
  storage:storage,
  limit : {fileSize: 100000 * 100},
}).single('profile');


uploads(req,res, async(err) => {
  if(err){
    console.log(err);
  }
console.log(req.file);

const employee = new User({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password,
  gender:req.body.gender,
  dept:req.body.dept,
  city:req.body.city,
  address:req.body.address,

})

 await employee.save();
})

  res.send("passed from Add_employee");


}catch(err){
  console.log(err);
}

}








module.exports = {
    login,Add_employee,
}