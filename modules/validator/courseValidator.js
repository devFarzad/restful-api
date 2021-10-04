const Validator = require('../validator/validator');
const { check } = require('express-validator');
const { body } = require('express-validator');
class CourseValidator extends Validator {
    handle() {
        return [
            body('title').not().isEmpty().withMessage('Please Enter title'),
            body('image').not().isEmpty().withMessage('Please Add image'),
            body('body').isLength({ min: 5 }).withMessage('You must enter at least 5 characters'),
            body('price').not().isEmpty().withMessage('Please Enter Price '),
            body('price').trim(),

            // body('title','عنوان نباید خالی باشد').notEmpty(),
            // body('body','محتوا نباید خالی باشد').notEmpty(),
            // body('price','قیمت نباید خالی باشد').notEmpty(),
            // body('image','تصویر نباید خالی باشد').notEmpty()

        ];
    }
}
module.exports = new CourseValidator();