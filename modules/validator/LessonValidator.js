const Validator = require('./validator');
const Course = require('../models/Course');
const { check } = require('express-validator');
const { body } = require('express-validator');
class LessonValidator extends Validator {
    handle() {
        return [
            check('course').isMongoId().withMessage('Please Valid Number')
            .custom(async (courseId,{req}) => {
                // if(req.query._method ==='Post'){
                 
                    let course = await Course.findById(courseId);
                    if (!course) throw new Error('this course not Exist');
               //}
              
                
            }),
            body('title').not().isEmpty().withMessage('Please Enter title'),
            body('videoUrl').not().isEmpty().withMessage('Please video Url '),
            body('number').not().isEmpty().withMessage('Please Enter Lesson Number'),
           

            // body('title','عنوان نباید خالی باشد').notEmpty(),
            // body('body','محتوا نباید خالی باشد').notEmpty(),
            // body('price','قیمت نباید خالی باشد').notEmpty(),
            // body('image','تصویر نباید خالی باشد').notEmpty()

        ];
    }
}
module.exports = new LessonValidator();