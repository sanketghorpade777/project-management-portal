const Auth = require('../Models/Auth');
const jwt = require("jsonwebtoken");
const {comparePassword} = require('../Helpers/auth');



const login = async(req,res) => {
  try{
  const {username,password,usertype} = req.body;
  console.log(username,password,usertype);

      const userDetails = await Auth.findOne({email:username});
      if(!userDetails){
        res.status(400).send({message:" Record Not Found" , success:false});
      }
      const verifyPassword =  await comparePassword(password,userDetails.password);
       if(verifyPassword){

        const token = await jwt.sign({ userId: userDetails._id }, process.env.JWT_SECREAT);
       return res.status(200).send({ success:true,message:"Login Successful",token:token,data:userDetails});

      
   



    
    }
  
    res.status(400).send({message:" Empty Fields" , success:false});


  }catch(err){
      res.status(400).send({message:"Something Went Wrong" , success:false});
  }


}












const Register = (req,res) => {
  res.send("passed from register");
}








module.exports = {
    login,Register
}