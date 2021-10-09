// const CourseTransform = require("../../../transforms/V1/CourseTransform");
const LessonsTransform = require("../../../transforms/V1/LessonsTransform");
const Controller = require("../Controller");

module.exports = new class LessonController extends Controller {
    async single(req, res, next) {

        try {
        
         this.showValidationErrors(req,res).then(data=>{
            this.model.Lesson.findById(req.params.id).populate('course').exec((err,lesson)=>{
                if(err) return res.status(422).json({
                    message:'Have Errors ....',
                    data:{},
                    success:false
                })
                if(!lesson) return res.status(404).json({
                    message:'Not Found Lesson ',
                    data:{},
                    success:false
                });
                return res.status(200).json({
                    message:'Success Found Lesson',
                    data:new LessonsTransform().withCourse().transform(lesson),
                    success:true
                })
            })
            return;
        
         }).catch(err=>{
             if(err) throw new Error(err);
         })

        } catch (err) {

        }
    }
}