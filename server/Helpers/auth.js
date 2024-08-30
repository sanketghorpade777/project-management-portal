const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const hashPassword = (password) => {
      return new Promise((resolve,reject) => {

        bcrypt.genSalt(12,(err,salt) => {
            if(err){
                reject(err)
            }
            bcrypt.hash(password,salt,(err,hash) => {
                if(err){
                    reject(err);
                }
                resolve(hash);
            })
        })
      })
    }
      const comparePassword = (password,hashed) => {
        return bcrypt.compare(password,hashed)
      }



      const SECRET_KEY = process.env.JWT_SECREAT; 
      const generateToken = (user) => {
          return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
              expiresIn: '1h'
          });
      };
      const verifyToken = (token) => {
          return jwt.verify(token, SECRET_KEY);
      };
      module.exports = {
        hashPassword,
        comparePassword,
        generateToken,
        verifyToken
      }




