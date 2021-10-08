const UserTransform = require("../../../transforms/V1/UserTransform");
const Controller = require("../Controller");

module.exports = new class UserController extends Controller{
   async index(req,res,next){
       try {
           if(req.user)  return res.status(200).json({data:new UserTransform().transform(req.user,true),success:true});
           return res.status(422).json({data:'Access Denied !',success:false});
       } catch (err) {
           next(err);

       }

    }
    async uploadImege(req,res,next){
        if(req.file){
            return res.status(200).json({
                message:'Success Upload Image',
                data:{path:'http://localhost:8080/'+req.file.path.replace(/\\/g,'/')},
                success:true
            })
        }else{
            return res.status(404).json({
                message:'Not Exist Image',
                success:false
            })
        };
        // return res.status(200).json({data:'Upload Image',success:true});

    }

}