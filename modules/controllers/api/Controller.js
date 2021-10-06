const Course = require('../../models/Course');
const Lesson = require('../../models/Lessons');
const { validationResult, check ,body} = require('express-validator');

const isMongoId = require('validator/lib/isMongoId');

module.exports = class Controller {
    constructor() {
        this.model = { Course ,Lesson};
      
    }
    // showValidationErrors(req, res,) {
    //     let errors = req.validationErrors();
    //     if (errors) {
    //         res.status(422).json({
    //             message: errors.map(error => {
    //                 return {
    //                     'field': error.param,
    //                     'message': error.msg
    //                 }
    //             }),
    //             success: false
    //         });
    //         return true;
    //     }
    //     return false

    // }
    showValidationErrors(req, res) {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //      res.status(422).json({ 
        //     message: errors.array().map(err=>{
        //      return {
        //       'feild':err.param,
        //       'message':err.msg
        //      }
        //     })
        //    });
        //    return callback(true);
        // }
        //     return callback(false);    
        return new Promise((resolve, reject) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(422).json({
                    message: errors.array().map(err => {
                        return {
                            'field': err.param,
                            'message': err.msg
                        }
                    })
                });
               reject();
            }
            resolve();

        });
    }
    scapeAndTrim(items){
        items.split(' ').forEach(item => {
          let Escap= body(item).escape();
          let ESC2= body(item).trim();
           console.log(ESC2);
        });
    }
    isMongoId(res,paramId){
        console.log('check MongoId',paramId);
        if (!isMongoId(paramId)) {
            console.log('check MongoId',paramId);

        return  res.json({
             message:' Id Invalid',
             success:false
         })
        }

    }
}
