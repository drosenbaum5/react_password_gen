
module.exports.users_get = (req, res) => {
    res.json({ msg: "Hit Users Controller", view:"All Users"})
}

module.exports.register_get = (req, res) => {
    res.json({ msg: "Hit Register Controller", view: "Register"});
}

module.exports.login_get = (req, res) => {
    res.json({ msg: "Hit Login Controller", view: "Login"});
}

module.exports.register_post = (req, res) => {
    res.json({ msg: "Hit Register Controller (POST)", view: "Register"});
}

module.exports.login_post = (req, res) => {
    res.json({ msg: "Hit Login Controller (POST)", view: "Login"});
}

