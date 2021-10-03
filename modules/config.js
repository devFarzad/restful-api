const path = require('path');

module.exports = {
    port : 8080,
    path : {
        controllers : { 
            api : path.resolve('../modules/controllers/api'),
            web : path.resolve('../modules/controllers/web')
        },
        model : path.resolve('./modules/models'),
        controller : path.resolve('./controllers'),
    }
}