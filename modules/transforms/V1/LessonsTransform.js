const CourseTransform = require('./CourseTransform');
const Transform = require('./Transform');

module.exports = class LessonsTransform extends Transform {
    transform(item) {
        return {
            'title': item.title,
            'body': item.body,
            ...this.showCourses(item)

        }
    }
    withCourse() {
        this.withCoursesStatus = true;
        return this;
    }
     //Overide
     CollactionName(){
        return 'Lessons';
    }
    showCourses(item) {
        // console.log(new CourseTransform().transform(item.course));
        if (this.withCoursesStatus) {
            return {
                course: new CourseTransform().transform(item.course)
            }
        }
        return {};

    }
}
