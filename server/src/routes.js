const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const songController = require('./controllers/songController');
const bookmarkController = require('./controllers/bookmarkController');

// Authentication Routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Administration Route
router.get('/users', authController.index);
router.get('/songs', songController.index);

// Song CRUD Routes
router.get('/songs/:id', songController.find);
router.post('/songs/add', songController.add);
router.put('/songs/edit', songController.edit);
router.post('/songs/delete', songController.delete);

// Bookmark Routes
router.get('/bookmarks', bookmarkController.index);
router.get('/bookmarks/:id', bookmarkController.listBookmark);
router.post('/bookmarks/add', bookmarkController.addBookmark);
router.post('/bookmarks/delete', bookmarkController.deleteBookmark);

module.exports = router;
