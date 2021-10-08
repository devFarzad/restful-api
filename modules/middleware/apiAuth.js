const jwt = require("jsonwebtoken");
const Middleware = require("./middleware");
const User =require('../models/User');
const UserTransform = require("../transforms/V1/UserTransform");
class ApiAuth extends Middleware{
    handle(req, res, next) {
        let token =req.body.token || req.query.token || req.headers['x-access-token'];
        if(token){
           return jwt.verify(token,config.secret,(err,decode)=>{
                if(err) return res.json({data:'Failed to Authenticated Token !',success:false});
                User.findById(decode.user_id,(err,user)=>{
                    if(err) return res.status(403).json({data:'Have Error ',success:false});
                    if(!user) return res.status(403).json({data:'User Not Exist ',success:false});
                    user.token=token;
                     req.user = user;
                     return next();
                   

                });
                //   console.log(user.name);
                   

            });
            // console.log(token);
            
        }
            return res.status(403).json({data:'No Token Provided',success:false})
        
        
    }
}
module.exports = new ApiAuth();