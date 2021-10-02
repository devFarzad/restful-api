const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');
router.get('/', (req, res) => {
    res.json('Welcome To API');
});
const adminRouter = express.Router();
adminRouter.get('/courses', (req, res) => {
    let course = Course.find({}, (err, courses) => {
        if (err) throw new Error(err);
        if (courses) {
            return res.json(courses);

        }else if(courses ==[]){
            return res.json('Not Found any Course !');
        }
    });

});
adminRouter.post('/courses', (req, res) => {
    //Validation

    // Create Course 
    let newCourse = new Course({
        title:req.body.title,
        body:req.body.body,
        price:req.body.price,
        image:req.body.image,
    }).save((err)=>{
        if(err) throw new Error(err);
        res.json('Create Course');
    });

});
adminRouter.put('/courses/:id', (req, res) => {
      Course.findByIdAndUpdate(req.params.id,{title:'COURSE SIX'},(err,course)=>{
        if(err) throw new Error(err);
        if(course) res.json('ok');
      });

});
adminRouter.delete('/courses/:id', (req, res) => {
    Course.findByIdAndRemove(req.params.id,(err,course)=>{
        if(err) throw new Error(err);
        if(course) res.json('Success Deleted !');
    })
});
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