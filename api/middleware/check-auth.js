const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    try {
    var token = req.header('Authorization').split(' ')
    const decoded = jwt.verify(token[1],process.env.jwt_secret);
    req.userData = decoded
    next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth Failed'
        })
    }
}