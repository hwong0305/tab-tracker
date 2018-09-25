const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const songController = require('./controllers/songController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/users', authController.index);
router.get('/songs', songController.index);
router.get('/songs/:id', songController.find);
router.post('/songs/add', songController.add);
router.put('/songs/edit', songController.edit);

module.exports = router;
