const express = require('express');
const router = express.Router();
router.get('/courses',(req,res)=>{
    res.json({
        data:[{
            title: 'course 1',
            content:'this is course 1'
        },{
            title: 'course 2',
            content:'this is course 2'
        },{
            title: 'course 3',
            content:'this is course 3'
        },{
            title: 'course 4'
        },{
            title: 'course 5'
        },{
            title: 'course 6'
        },
    ]
    })
    });
    module.exports=router;