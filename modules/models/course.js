const mongose = require('mongoose');
const Schema=mongose.Schema;
const CourseSchema = new Schema({
 user:{type:Schema.Types.ObjectId,ref:'User'},
 title:{type:String,required:true},
 body:{type:String,required:true},
 price:{type:String,required:true},
 image:{type:String,required:true},
 lessons:[{type:Schema.Types.ObjectId,ref:'Lesson'}]
},{timestamps:true});
module.exports= mongose.model('Course',CourseSchema);
