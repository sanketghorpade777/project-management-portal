const Auth = require('../Models/Auth');
const jwt = require("jsonwebtoken");
const {comparePassword} = require('../Helpers/auth');
const multer = require('multer');
const User = require('../Models/User');


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
  let fileName = req.files.upload.name;



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profiles/'); // The folder where files will be saved
  },
  filename: function (req, file, cb) {
    const unique_name = Date.now() + path.extname(file.originalname);
    cb(null,unique_name);
  },
});



let upload = multer({
  storage,
  limit : {fileSize: 100000 * 100},
}).single('upload');

const employee = new User({

})


  res.send("passed from Add_employee");
}








module.exports = {
    login,Add_employee,
}