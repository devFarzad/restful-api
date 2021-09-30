const express = require('express');
const app = express();
const bodyParser = require('body-parser');

global.config = require('./modules/config');

// Load WebRouter
const webRouter = require('./modules/routes/web');
const apiRouter = require('./modules/routes/api/index');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));
app.use('/',webRouter);
app.use('/api',apiRouter);
app.listen(config.port,()=>{
    console.log(`server running at Port ${config.port}`)
});
