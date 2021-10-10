const mongose = require('mongoose');
const Schema=mongose.Schema;
var mongoosePaginate = require('mongoose-paginate');

const LessonSchema = new Schema({
 course:{type:Schema.Types.ObjectId,ref:'Course'},
 title:{type:String,required:true},
 body:{type:String,required:true},
 videoUrl:{type:String,required:true},
 number:{type:String,required:true},
 viewCount:{type:Number,default:0},
 viewDownload:{type:Number,default:0},
 viewComment:{type:Number,default:0},
 
},{timestamps:true});
LessonSchema.plugin(mongoosePaginate);

module.exports= mongose.model('Lesson',LessonSchema);
