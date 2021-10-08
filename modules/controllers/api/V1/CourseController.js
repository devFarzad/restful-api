const Controller =require('../Controller')
const CourseTransform =require('../../../transforms/V1/CourseTransform')
module.exports = new class CourseController extends Controller {
    index(req,res){
       this.model.Course.find({}, (err, courses) => {
            if (err) throw new Error(err);
            if (courses) {
                return res.json({
                   data: new CourseTransform().transformCollaction(courses),
                   success:true
                });

            } 
            res.json({
                message: 'course empty',
                success:false
            })
        });
     
    }
}