const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');

router.get('*', (req, res) => {
    res.send('Welcome to a world of nothingless');
});

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
