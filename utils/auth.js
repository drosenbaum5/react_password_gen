const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
    console.log("Running Authorization");
    // Capture Token
    // console.log(req)
    // console.log(req.headers('x-auth-token'))
    // const token = req.headers('x-auth-token');
    const token = req.cookies.token;
    console.log(token);
    // const token = req.headers.token;
    if(!token) {
        return res.status(403).json({ msg: "Token Missing, Authorization Denied"});
    }
    // Verify Token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(verified);
    if(!verified) {
        return res.status(403).json({ msg: "Token Failed, Authorization Denied"});
    } else {
        console.log("Verified ...")
    }

    res.locals.user = verified.id;
    res.user = verified.id;
    console.log(res.user);
    console.log("My Voice is my Password, Verify Me")
    next();
}

module.exports = isAuthorized;