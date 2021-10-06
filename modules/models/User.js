const mongose = require('mongoose');
const Schema=mongose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

const UserSchema = new Schema({
 name:{type:String,required:true},
 email:{type:String,required:true,unique:true},
 password:{type:String,required:true},
 courses:[{type:Schema.Types.ObjectId,ref:'Course'}]
},{timestamps:true});
UserSchema.pre('save',function(next){
    //decrypt pass
    
        bcrypt.hash(this.password, 10, (err, hash) =>{
            // Store hash in your password DB.
            this.password = hash;
            // console.log(this);
            next();
        });
        // console.log(this.password);
   
  
})
module.exports= mongose.model('User',UserSchema);
