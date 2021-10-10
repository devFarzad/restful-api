const Controller = require('../Controller')
const CourseTransform = require('../../../transforms/V1/CourseTransform');
const { populate } = require('../../../models/Course');
module.exports = new class CourseController extends Controller {
    index(req, res) {

        let page = req.query.page || 1;
        this.model.Course.paginate({}, { page, sort: { createdAt: -1 }, limit: 2, populate: { path: 'lessons' } }).then(( result) => {

            if (result) {
                return res.json({
                    // data: {
                    //     items:new CourseTransform().withLessons().transformCollaction(result.docs),
                    //     limit:result.limit, //for pagination
                    //     page:result.page,//for pagination
                    //     pages:result.pages//for pagination
                    // },
                    data: new CourseTransform().withPaginate().withLessons().transformCollaction(result), //For Pagination 
                    success: true
                });

            }
            res.json({
                message: 'course empty',
                success: false
            })
        }).catch(err=> console.log(err));


        //    this.model.Course.find({}, (err, courses) => {
        //         if (err) throw new Error(err);
        //         if (courses) {
        //             return res.json({
        //                data: new CourseTransform().transformCollaction(courses),
        //                success:true
        //             });

        //         } 
        //         res.json({
        //             message: 'course empty',
        //             success:false
        //         })
        //     });

    }
}