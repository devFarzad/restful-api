const UserTransform = require("../../../transforms/UserTransform");
const Controller = require("../Controller");

module.exports = new class UserController extends Controller{
   async index(req,res,next){
       try {
           if(req.user)  return res.status(200).json({data:new UserTransform().transform(req.user),success:true});
           return res.status(422).json({data:'Access Denied !',success:false});
       } catch (err) {
           next(err);

       }

    }

}