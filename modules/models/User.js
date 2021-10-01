const mongose = require('mongoose');
const Schema=mongose.Schema;
const UserSchema = new Schema({
 name:{type:String,required:true},
});
module.exports= mongose.model('User',UserSchema);
