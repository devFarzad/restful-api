const Transform = require('./Transform');

module.exports = class LessonTransform extends Transform{
    transform(item){
        return {
            'title':item.title,
            'body':item.body,
            'price':item.price
           }
    }
}