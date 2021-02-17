const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');
const isAuthorized = require('../utils/auth');

router.get('/', (req, res) => {
    let newUser = {
        username: 'testing',
        email: 'a@b.com',
        password: 'pass1234'
    }

    res.json({ msg: "Working...", user: newUser });
});


router.get('/users', authController.users_get);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

router.get('/register', authController.register_get);
router.post('/register', authController.register_post);

router.get('/validate-token', authController.validate);

router.get('/users', isAuthorized, authController.users_get);
module.exports = router;