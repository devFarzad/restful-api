const multer  = require('multer');
const mkdirp = require('mkdirp');

const imageStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        let year = new Date().getFullYear();
        let month = new Date().getMonth()+1;
        let day = new Date().getDay();
        let dir = `./public/uploads/images/${year}/${month}/${day}`;
        mkdirp(dir).then(made=>{
            callback(null,dir)
        });
       
    }
    ,filename:(req,file,callback)=>{
        callback(null,Date.now() + '-' +file.originalname );
    }
});
const imageFilter = (req,file,callback)=>{
    if(file.mimetype=== "image/png" || file.mimetype=== "image/jpeg"){
        callback(null,true);
    }else{
        callback(null,false);
    }
}
const uploadImage = multer({
    storage:imageStorage ,
    fileFilter:imageFilter});
module.exports ={
    uploadImage
    }
