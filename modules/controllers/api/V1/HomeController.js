

class HomeController {
    index(req,res){
        res.json('Wellcome To API');
    }
    version(req,res){
        res.json('API Version : Version 1');
    }

}
module.exports =new HomeController();