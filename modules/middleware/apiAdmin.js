const User = require('../models/User');
module.exports = (req, res, next) => {
    if (req.user.isAdmin) return next();
    return res.status(403).json({
        message:'Access Denied !',data:{},success:false
    })
}