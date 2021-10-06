const Validator = require('./validator');
const { check } = require('express-validator');
const { body } = require('express-validator');
const User = require('../models/User');
class RegisterValidator extends Validator {
    handle() {
        return [
            body('name').not().isEmpty().withMessage('Please Enter name'),
            // body('email').not().isEmpty().withMessage('Please Enter email'),
            body('email').isEmail().withMessage('Please Enter validEmail').custom(async (value,{req}) => {
                // if(req.query._method ==='Post'){
                 
                    let user = await User.findOne({email:value});
                    if (user) throw new Error('This email has already been registered');
               //}
              
                
            }),
            body('password').isLength({ min: 6 }).withMessage('You must enter at least 6 characters'),
           

            // body('title','عنوان نباید خالی باشد').notEmpty(),
            // body('body','محتوا نباید خالی باشد').notEmpty(),
            // body('price','قیمت نباید خالی باشد').notEmpty(),
            // body('image','تصویر نباید خالی باشد').notEmpty()

        ];
    }
}
module.exports = new RegisterValidator();