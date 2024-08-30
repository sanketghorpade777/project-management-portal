


const login = (req,res) => {
  console.log(req.body);
  res.send("passed from test");
}

const Register = (req,res) => {
  res.send("passed from register");
}












module.exports = {
    login,Register
}