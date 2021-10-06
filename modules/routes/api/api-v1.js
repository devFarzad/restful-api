const express = require('express');
const router = express.Router();
const {api:ControllerAPI}=config.path.controllers;
const { check,body } = require('express-validator');

// const {web:ControllerWeb}=config.path.controllers;
//model
const Course = require('../../models/Course');
const homeController = require(`../../controllers/api/V1/HomeController`);
const adminLessonController = require('../../controllers/api/V1/admin/LessonController');
const courseController = require(`../../controllers/api/V1/CourseController`);
const adminCourseController = require('../../controllers/api/V1/admin/CourseController');
const HomeController = require('../../controllers/api/V1/HomeController');

//validator
const CourseValidator = require('../../validator/courseValidator');
const LessonsValidator = require('../../validator/LessonValidator');


router.get('/',HomeController.index);
router.get('/version',HomeController.version);
 router.get('/courses',courseController.index.bind(courseController))
//admin Router
const adminRouter = express.Router();
adminRouter.get('/courses', adminCourseController.index.bind(adminCourseController));
adminRouter.get('/courses/:id', adminCourseController.single.bind(adminCourseController));
adminRouter.post('/courses',CourseValidator.handle(),adminCourseController.store.bind(adminCourseController));
adminRouter.put('/courses/:id',check('id').isMongoId().withMessage('Id invalid !'),adminCourseController.update.bind(adminCourseController));
adminRouter.delete('/courses/:id',check('id').isMongoId().withMessage('Id invalid !'),adminCourseController.delete.bind(adminCourseController));

//lessons Admin
adminRouter.get('/lessons', adminLessonController.index.bind(adminLessonController));
adminRouter.get('/lessons/:id',
check('id').isMongoId().withMessage('Id invalid !'),
adminLessonController.single.bind(adminLessonController));
adminRouter.post('/lessons',
body('nember').escape().trim(),
body('body').escape().trim(),
body('title').escape().trim(),
LessonsValidator.handle(),adminLessonController.store.bind(adminLessonController));
adminRouter.put('/lessons/:id',check('id').isMongoId().withMessage('Id invalid !'),LessonsValidator.handle(),adminLessonController.update.bind(adminLessonController));
adminRouter.delete('/lessons/:id',check('id').isMongoId().withMessage('Id invalid !'),adminLessonController.delete.bind(adminLessonController));




router.use('/admin', adminRouter);


// router.get('/courses',(req,res)=>{
// res.json({
//     data:[{
//         title: 'course 1',
//         body:'this is course 1'
//     },{
//         title: 'course 2',
//         body:'this is course 2'
//     },{
//         title: 'course 3',
//         body:'this is course 3'
//     },{
//         title: 'course 4'
//     },{
//         title: 'course 5'
//     },{
//         title: 'course 6'
//     },
// ]
// })
// });
module.exports = router;