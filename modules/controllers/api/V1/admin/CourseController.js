
const { body } = require('express-validator');

const Controller = require('./../../Controller');
class CourseController extends Controller {
    index(req, res) {
        // console.log(this);
        let course = this.model.Course.find({}, (err, courses) => {
            if (err) throw new Error(err);
            if (courses) {
                return res.json(courses);

            } else if (courses == []) {
                return res.json('Not Found any Course !');
            }
        });

    }

    store(req, res) {
        this.showValidationErrors(req, res).then(() => {
            // Create Course 
            let newCourse = this.model.Course({
                title: req.body.title,
                body: req.body.body,
                price: req.body.price,
                image: req.body.image,
            }).save((err) => {
                if (err) throw new Error(err);
                res.json('Create Course');
            });

        }).catch(err => {
            console.log(err);
        })

    }

    update(req, res) {


        this.showValidationErrors(req, res).then(() => {
            this.model.Course.findByIdAndUpdate(req.params.id, { title: req.body.title, price: req.body.price }, (err, course) => {
                if (err) throw new Error(err);
                if (course) res.json('ok');
            });
        }).catch(err => console.log(err));

    }
    delete(req, res) {
        this.showValidationErrors(req, res).then(() => {
            this.model.Course.findByIdAndRemove(req.params.id, (err, course) => {
                if (err) throw new Error(err);
                if (course) res.json('Success Deleted !');
            })
        }).catch(err => {

        });

    }

}
module.exports = new CourseController();