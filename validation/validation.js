let jwt = require("jsonwebtoken");
let User = require("../module/User");

const validateSession = (req,res,next) => {
    if(req.method === "OPTIONS") {
        next();
    }
    else {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(403).json({
                message: "User not found/not token provided"
            })
        }
        else {
            jwt.verify(token, process.env.SIGN, (err,decoded) => {
                if(!err && decoded) {
                    User.findOne({
                        where: {
                            id: decoded.id
                        }

                    }).then(user => {
                        if(!user) throw 'err'
                        req.user = user;
                        next();
                    }).catch(err => next(err))
                }
                else {
                    req.err = err;
                    return res.status(500).send("Not Authorized");
                }
            })
        }
    }
}

module.exports = validateSession;