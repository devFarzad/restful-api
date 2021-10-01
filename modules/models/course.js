const mongose = require('mongoose');
const Schema=mongose.Schema;
const courseSchema = new Schema({
 name:{type:String,required:true},
});
module.exports= mongose.model('Course',courseSchema);
