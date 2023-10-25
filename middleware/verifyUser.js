const jwt = require("jsonwebtoken");

exports.verifyUser = (req, res, next) => {
    const token = req.header('token');
    if(!token) {
        return res.json({Error: "You are no authenticated"})
    } else {
        jwt.verify(token, "NEWSuser", (err, decoded) => {
            console.log(token)
            if(err) return res.json({Error: "Token wrong"})
            req.role = decoded.role;
            req.id = decoded._id;
            next();
        })
    }
};
