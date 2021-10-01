const mongose = require('mongoose');
const Schema=mongose.Schema;
const PodocustSchema = new Schema({
 name:{type:String,required:true},
});
module.exports= mongose.model('Podcust',PodocustSchema);
