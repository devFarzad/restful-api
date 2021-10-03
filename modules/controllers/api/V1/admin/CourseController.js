
const Controller = require('./../../Controller');
class CourseController extends Controller {
    index(req,res){
        // console.log(this);
        let course = this.model.Course.find({}, (err, courses) => {
            if (err) throw new Error(err);
            if (courses) {
                return res.json(courses);
    
            }else if(courses ==[]){
                return res.json('Not Found any Course !');
            }
    });
    
}
store(req ,res){
        // Create Course 
        let newCourse =  this.model.Course({
            title:req.body.title,
            body:req.body.body,
            price:req.body.price,
            image:req.body.image,
        }).save((err)=>{
            if(err) throw new Error(err);
            res.json('Create Course');
        });
    
}

update(req,res){
    this.model.Course.findByIdAndUpdate(req.params.id,{title:'COURSE SIX'},(err,course)=>{
        if(err) throw new Error(err);
        if(course) res.json('ok');
      });
}
delete(req,res){
    this.model.Course.findByIdAndRemove(req.params.id,(err,course)=>{
        if(err) throw new Error(err);
        if(course) res.json('Success Deleted !');
    })
}

}
module.exports =new CourseController();