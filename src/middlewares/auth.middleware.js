const jwt = require('jsonwebtoken');
const config = require('../config');

const checkAuthor = (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        //decode token
        if (token) {
            // verifies secret and check exp
            jwt.verify(token, config.jwtSecret, function (err, decoded) {
                if (err) {
                    return res.status(401).json({
                        message: "Failed to authenticate token."
                    });
                } else {
                    req.user = decoded;
                    next();// go to the next routes and dont shtop here
                }
            });
        } else {
            console.log('Dont have token')

            return res.status(403).json({
                message: "No token provied."
            });
        }
    }
    catch (error) {
        console.log('Auth failed')
        return res.status(401).json({
            message: "Auth failed"
        });
    }

};

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.user && req.profile._id == req.user.data._id
    if (!(authorized)) {
        return res.status('403').json({
            message: "User is not authorized"
        })
    }
    next()
}

module.exports = {
    checkAuthor,
    hasAuthorization
}