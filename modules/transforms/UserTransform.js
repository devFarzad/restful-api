const Transform = require('./Transform');

module.exports = class UserTransform extends Transform{
    transform(item){
        return {
            'name':item.name,
            'email':item.email,
            // 'price':item.price
           }
    }
}