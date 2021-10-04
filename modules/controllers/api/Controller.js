const Course = require('../../models/Course');
const { validationResult } = require('express-validator');

module.exports = class Controller {
    constructor() {
        this.model = { Course };
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
}
