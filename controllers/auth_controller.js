
const User = require('../models/usersModel');
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.users_get = async (req, res) => {
    // console.log(req);
    // console.log(req.body);
    // console.log(req.user);
    // console.log(req.headers);
    // console.log(req.locals);

    let users = await User.find({});
    console.log(users);

    return res.json({ msg: "Hit Users Controller", view:"All Users", allUsers: users})
}

module.exports.user_get = async (req, res) => {
    // console.log(req.user);
    console.log(res.user);
    try {
        let user = await User.findById(res.user)
        console.log(user);
        res.json({ data: user })
    } catch(err) {
        console.log(err);
    }
}

module.exports.register_get = (req, res) => {
    res.json({ msg: "Hit Register Controller", view: "Register"});
}

module.exports.login_get = (req, res) => {
    res.json({ msg: "Hit Login Controller", view: "Login"});
}

module.exports.register_post = async (req, res) => {
    console.log("In Register Route...");
    console.log(req.body);
    try {
        // Deconstruct the Form Inputs
        const { first, last, username, email, password, confirm } = req.body;

        // -- VALIDATION --//
        if(!username || !email || !password || !confirm) {
            return res.status(400).json({ msg: "Required field(s) missing" });
        }
        
        if(password.length < 5) {
            return res.status(400).json({ msg: "Password must be at least 5 characters long"});
        }

        if(password !== confirm) {
            return res.status(400).json({ msg: "Passwords must match"});
        }

        // User Email already exists in database (?)
        const currentUser = await User.findOne({ email: email });
        console.log(`Current User - ${currentUser}`)
        if(currentUser) {
            return res.status(400).json({ msg: "A User with that email already exists"});
        }

        // Encrypt Password before sending it to the DB
        const saltHash = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, saltHash);
        // console.log(saltHash, passHash);

        // Create User object
        let newUser = {
            first: first,
            last: last,
            username: username,
            email: email,
            password: passHash
        }
        // console.log(newUser);

        // Create User in Database
        const user = await User.create(newUser);

        // Request Token (Pass in User ID#)
        const token = createToken(user._id);
        // console.log(token);

        // --> Response to Frontend
        res.cookie("token", token, { httpOnly: true }).send();
    } catch(err) {
        console.log(err);
        res.status(400).json({ msg: "User not created" });
    }
}

module.exports.login_post = async (req, res) => {
    try {
        const { email, password, confirm } = req.body;
    
        if(password !== confirm) {
            res.status(400).json({ msg: "Passwords do not match" });
        }

        // Search for Existing User
        let user = await User.findOne({ email: email });
        if(user) {
            const authorized = await bcrypt.compare(password, user.password)
            if(authorized) {
                console.log("User Found");

                const token = createToken(user._id);
                // return user;
                res.user = user;

                res.cookie("token", token, { httpOnly: true }).send();
            }
            throw Error("Invalid Credentials");
        }
        throw Error("Invalid Email");
    } catch(err) {
        res.status(400).json({ msg: "Not Authorized" });
    }
}

module.exports.logout = (req, res) => {
    console.log("Logging out...");
    // Clear Token from Cookie to log User OUT
    res.cookie("token", "", { 
        httpOnly: true,
        expiresIn: new Date(0)
    }).send();
}

// Function to Create a Token on every Register & Login POST
const createToken = (id) => {
    // Return the TOKEN to the calling function
    return jwt.sign({ id: id }, process.env.TOKEN_SECRET, { expiresIn: 86400 });
}


module.exports.validate = async (req, res) => {
    console.log('validating token ...')
    // console.log(req);
    try {
        const token = req.cookies.token;
        console.log(`Token: ${token}`);
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        if(!verified) return res.json(false);
        console.log(verified);
        const user = await User.findById(verified.id);
        if(!user) return res.json(false);
        console.log(user);

        return res.json(true);
    } catch(err) {
        console.log(err)
        res.status(403).json({ error: err.message });
    }
} 

