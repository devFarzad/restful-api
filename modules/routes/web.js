const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json('Welcome To Home Page');

});
router.get('/about',(req,res)=>{
 res.json('Welcome To About Page');
})

module.exports=router;