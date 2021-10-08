const Controller = require("../Controller")
const userTransform =require('../../../transforms/V1/UserTransform');
const bcrypt = require('bcrypt');
module.exports = new class AuthController extends Controller {
    async login(req, res, next) {
        try {
            this.showValidationErrors(req,res).then(data=>{
                let {email,password} = req.body;
                this.model.User.findOne({email:email},(err,user)=>{
                    // return res.json(user);
                    if(err) return res.status(422).json({data:'Have Error 1 ',success:false});
                    if(!user) return res.status(422).json({data:'User not Exist',sucess:false});
               bcrypt.compare(password,user.password,(err,status)=>{
                //    console.log(password,user.password,status);
                   if(err) return res.sttus(422).json({data:'Have Error 2',success:false});
                   if(status) return res.status(200).json({data:new userTransform().transform(user,true),sucess:true});
                   return res.status(422).json({data:'User not Exist',sucess:false});
               })
                // return res.status(100).json({data:new userTransform().transform(user),sucess:true})
                });
            }).catch(err=>{
                if(err) throw new Error(err);
            })

        } catch (err) {

        }
    }
    async register(req, res, next) {
        try {
            this.showValidationErrors(req, res).then(data => {
                let { name, email, password } = req.body;
                let user = this.model.User({
                    name, email, password
                })
                user.save(err=>{
                    if(err) return res.json({data:'Have error',success:false });
                    // return res.json(user)
                     return res.json({
                    data: new userTransform().transform(user),
                    success:true
                });
                })
               
            }).catch(err => {
                if (err) throw new Error(err);
            })


        } catch (err) {

        }
    }
}
