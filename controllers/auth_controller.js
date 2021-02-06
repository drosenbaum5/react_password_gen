
const User = require('../models/usersModel');
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.users_get = (req, res) => {
    res.json({ msg: "Hit Users Controller", view:"All Users"})
}

module.exports.register_get = (req, res) => {
    res.json({ msg: "Hit Register Controller", view: "Register"});
}

module.exports.login_get = (req, res) => {
    res.json({ msg: "Hit Login Controller", view: "Login"});
}

module.exports.register_post = async (req, res) => {
    // console.log(req.body);
    try {
        // Deconstruct the Form Inputs
        const { username, email, password, passwordCheck } = req.body;

        // -- VALIDATION --//
        if(!username || !email || !password || !passwordCheck) {
            return res.status(400).json({ msg: "Required field(s) missing" });
        }
        
        if(password.length < 5) {
            return res.status(400).json({ msg: "Password must be at least 5 characters long"});
        }

        if(password !== passwordCheck) {
            return res.status(400).json({ msg: "Passwords must match"});
        }

        // User Email already exists in database (?)
        const currentUser = await User.findOne({ email: email });
        if(currentUser) {
            return res.status(400).json({ msg: "A User with that email already exists"});
        }

        // Encrypt Password before sending it to the DB
        const saltHash = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, saltHash);
        // console.log(saltHash, passHash);

        // Create User object
        let newUser = {
            username: username,
            email: email,
            password: passHash
        }
        console.log(newUser);
        // Create User in Database
        const user = await User.create(newUser);

        // Request Token (Pass in User ID#)
        const token = createToken(user._id);
        console.log(token);

        // --> Response to Frontend
        res.header({ "x-auth-token": token, "Content-Type": "application/json" });
        res.status(201).json({ msg: "New User Created", user: user , token: token });
    } catch(err) {
        console.log(err);
        res.status(400).json({ msg: "User not created" });
    }
}

module.exports.login_post = (req, res) => {
    res.json({ msg: "Hit Login Controller (POST)", view: "Login"});
}

// Function to Create a Token on every Register & Login POST
const createToken = (id) => {
    // Return the TOKEN to the calling function
    return jwt.sign({ id: id }, process.env.TOKEN_SECRET, { expiresIn: 86400 });
}

