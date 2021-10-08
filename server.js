const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongose = require('mongoose');
const userModel = require('./modules/models/User');
const expressValidator = require('express-validator');
const { body ,check } = require('express-validator');


global.config = require('./modules/config');
//connect DB
mongose.connect('mongodb://127.0.0.1:27017/apiLearn');
mongose.Promise=global.Promise;

// Load WebRouter
const webRouter = require('./modules/routes/web/web');
const apiRouter = require('./modules/routes/api/index');

// new userModel({
//     name:'Farzad Qader'
// }).save((err)=>{
//     if(err) throw new Error(err);
// });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));
app.use(express.json());
app.use(body());
app.use(check());
app.use(express.static('/public'));
app.use('/',webRouter);
app.use('/api',apiRouter);
app.listen(config.port,()=>{
    console.log(`server running at Port ${config.port}`)
});
