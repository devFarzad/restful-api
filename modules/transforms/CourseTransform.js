const Transform = require('../transforms/Transform');

module.exports = class CourseTransform extends Transform{
    transform(item){
        return {
            'title':item.title,
            'body':item.body,
            // 'price':item.price
           }
    }
}