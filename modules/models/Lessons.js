const mongose = require('mongoose');
const Schema=mongose.Schema;
const LessonSchema = new Schema({
 name:{type:String,required:true},
});
module.exports= mongose.model('Lesson',LessonSchema);
