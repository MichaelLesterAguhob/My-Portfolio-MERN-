const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.JWT_SECRET_KEY


module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email
    }
    return jwt.sign(data, secret, {});
}


module.exports.verify = (req, res, next) => {
    const token = localStorage.getItem('token')
    if(typeof token === 'undefined') {
        return res.status(400).send({auth: "Verification failed. No token."})
    }   

    token = token.slice(7, token.length);
    jwt.verify(token, secret, function(error, decodedToken) {
        if(error) {
            return res.status(403).send({
                auth: "Failed",
                message: error.message
            })
        } else {
            req.user = decodedToken;
            next();
        }
    })
}

module.exports.errorHandler = (error, req, res, next) => {
    const statusCode = error.status || 500;
    const errorMessage = error.message || 'Internal server error.';
    res.status(statusCode).send({
        error: {
            message: errorMessage,
            errorCode: error.code || 'Server Error',
            details: error.details || null
        }
    })
}