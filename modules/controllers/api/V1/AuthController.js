const Controller = require("../Controller")
const userTransform =require('../../../transforms/UserTransform');
const { json } = require("body-parser");
module.exports = new class AuthController extends Controller {
    async login(req, res, next) {
        try {

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
