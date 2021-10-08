const Transform = require('./Transform');
const jwt = require('jsonwebtoken');

module.exports = class UserTransform extends Transform {
    transform(item, createToken = false) {
        this.createToken = createToken;
       
        return {
            'name': item.name,
            'email': item.email,
            // 'price':item.price
            ...this.withTokern(item)
        }
    }
    withTokern(item) {
        if (item.token) {
          
            return { token: item.token }
        }
        if (this.createToken) {
            let payload = { user_id: item._id }
            let token =jwt.sign(payload,
                config.secret,
                {
                    expiresIn: '24h',
                    // algorithm: 'ES512'
                })
            return {
                token: token
            }
        }
        return;
    }
}