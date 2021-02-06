const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
    console.log("Running Authorization");
    // Capture Token
    const token = req.header('x-auth-token');
    // const token = req.headers.token;
    if(!token) {
        return res.status(403).json({ msg: "Token Missing, Authorization Denied"});
    }
    // Verify Token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if(!verified) {
        return res.status(403).json({ msg: "Token Failed, Authorization Denied"});
    }

    res.locals.user = verified._id;
    res.user = verified._id;
    console.log("My Voice is my Password, Verify Me")
    next();
}

module.exports = isAuthorized;