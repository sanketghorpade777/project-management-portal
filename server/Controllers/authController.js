const Auth = require('../Models/Auth');
const jwt = require("jsonwebtoken");
const {comparePassword} = require('../Helpers/auth');



const login = async(req,res) => {
  try{
  const {username,password,usertype} = req.body;

   if(!username == "  " || !password == "  " || !usertype == " "){
    const verifyPassword =  await comparePassword(password);
    console.log(verifyPassword);
      const userDetails = await Auth.findOne({email:username});
      if(!userDetails){
        res.status(400).send({message:" Record Not Found" , success:false});
      }

 
      // const newtoken = await jwt.sign({email:checkemail.email, id:checkemail._id,name:checkemail.name},process.env.JWT_SECRET,{},(err,token) => {
      //   if(err) throw err;
      //   return res.cookie('Token',token).json(checkemail).send({success:true,token:newtoken});
         
      //  })

      return res.status(200).send({success:true,message:"Login Successful",data:userDetails});
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