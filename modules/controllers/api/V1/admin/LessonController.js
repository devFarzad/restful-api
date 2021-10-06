const { json } = require('body-parser');
const Controller = require('../../Controller');
const CourseTransform = require('../../../../transforms/CourseTransform');
const { restart } = require('nodemon');

// const path =require('path');

//validator
// const Lesson = require('../../../../models/Lessons');
class LessonController extends Controller {
    async index(req, res, next) {
        try {

            let lessons = await this.model.Lesson.find({}, (err, lessons) => {
                if (err) res.json({
                    data: `Error Lesson : ${err}`,
                    success: false
                });
                if (!lessons) res.json({
                    data: 'Not Exist any Lessons',
                    success: false
                });
                return res.json({
                    data: new CourseTransform().transformCollaction(lessons),
                    success: true
                })
            });
            return res.json(lessons);
        } catch (err) {
            next(err);
        }

    }

    async store(req, res, next) {
        try {
            this.showValidationErrors(req, res).then(data => {
                // this.scapeAndTrim('title body videoUrl number course');

                let { title, body, videoUrl, number, course } = req.body
                //    this.isMongoId(res,course);
                let courseCurrent = this.model.Course.findById(course, (err, courses) => {

                    let lesson = this.model.Lesson({
                        title: title,
                        body: body,
                        videoUrl: videoUrl,
                        number: number,
                        course: courses._id
                    });
                    lesson.save(err => {
                        if (err) throw new Error(err)// console.log(err);
                        courses.lessons.push(lesson._id);
                        courses.save();
                        return res.json({
                            data: 'Create Lesson',
                            success: true
                        })

                    });


                });



            }).catch(err => {
                if (err) throw new Error(err);

            })
        } catch (err) {
            next(err);
        }

    }
    async delete(req, res, next) {
        try {
            this.showValidationErrors(req,res).then(data=>{
                this.model.Lesson.findById(req.params.id).populate('course').exec((err,lesson)=>{
                    if(err) return res.json({data:'Have Error' , success:false});
                    if(lesson) {
                        let course=lesson.course;
                      let pos=  course.lessons.indexOf(lesson._id)
                      course.lessons.splice(pos,1);
                      course.save();
                        lesson.remove();
                        return res.json({data:'Success Remove Lesson',success:true}); 
                    }
                });

                //  this.model.Lesson.findByIdAndRemove(req.params.id,(err,lesson)=>{
                  
                //     if(err) return res.json({data:'Have Error' , success:false});
                //     if(lesson){
                //         let course = this.model.Course.findById(lesson.course);
                //         course.lessons.forEach(lessonItem => {
   
                //             if(lessonItem._id==lesson._id) lessonItem.remove();
                //         });
                //        return res.json({data:'Success Remove Lesson',success:true}); 
                //     } 
                //     return res.json({data:'Not Exist Lesson',success:false})
                // })

            }).catch(err=>{
                if(err) throw new Error(err);
            });

        } catch (err) {
            next(err);
        }

    }
    async update(req, res, next) {
        try {
            this.showValidationErrors(req, res).then(data => {
                this.model.Lesson.findByIdAndUpdate(req.params.id,
                    {
                        title: req.body.title,
                        body: req.body.body,
                        videoUrl: req.body.videoUrl,
                        number: req.body.number
                    },
                    (err, lesson) => {
                        if (err) return res.json({
                            data: 'Have Error on Update Lesson',
                            success: false
                        });
                        if (!lesson) return res.json({ data: 'Lesson Not Exist', success: false });
                        return res.json({ data: 'Success Update', success: true });

                    });

            }).catch(err => {
                console.log(err);
            })


        } catch (err) {
            next(err);
        }


    }
    single(req, res, nex) {
        try {
            let lesson = this.model.Lesson.findById(req.params.id, (err, lessons) => {

                if (err) return res.json({ data: 'Have Error ', success: false });
                if (lessons) return res.json({ data: new CourseTransform().transform(lessons), success: true });
                return res.json({ data: 'Not Fount Lesson', success: false });
            })



        } catch (err) {

        }
    }

}
module.exports = new LessonController();