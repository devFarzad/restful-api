const Transform = require('./Transform');
module.exports = class CourseTransform extends Transform {
    //Overide
    transform(item) {
        return {
            'title': item.title,
            'body': item.body,
            'price': item.price,
            ...this.showLessons(item)
        }
    }
    withLessons() {
        this.withLessonsStaus = true
        return this;
    }
    //Overide
    CollactionName(){
        return 'Courses';
    }
    showLessons(item) {
        const LessonsTransform = require('./LessonsTransform');

        if (this.withLessonsStaus) {
            // console.log(item.lessons);
            return {
                lessons: new LessonsTransform().transformCollaction(item.lessons)
            }
        } else {
            return {};
        }

    }
}