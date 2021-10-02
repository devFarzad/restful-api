const mongose = require('mongoose');
const Schema=mongose.Schema;
const UserSchema = new Schema({
 name:{type:String,required:true},
 email:{type:String,required:true},
 password:{type:String,required:true},
 courses:[{type:Schema.Types.ObjectId,ref:'Course'}]
},{timestamps:true});
module.exports= mongose.model('User',UserSchema);
