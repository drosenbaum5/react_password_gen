const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    let newUser = {
        username: 'testing',
        email: 'a@b.com',
        password: 'pass1234'
    }

    res.json({ msg: "Working...", user: newUser });
});

module.exports = router;