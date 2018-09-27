const express = require('express');
const router = express.Router();
const passport = require('passport');
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
router.post(
    '/songs/add',
    passport.authenticate('jwt', { session: false }),
    songController.add
);
router.put(
    '/songs/edit',
    passport.authenticate('jwt', { session: false }),
    songController.edit
);
router.post(
    '/songs/delete',
    passport.authenticate('jwt'),
    songController.delete
);

// Bookmark Routes
router.get('/bookmarks', bookmarkController.index);
router.get('/bookmarks/:id', bookmarkController.listBookmark);
router.post(
    '/bookmarks/add',
    passport.authenticate('jwt', { session: false }),
    bookmarkController.addBookmark
);
router.post(
    '/bookmarks/delete',
    passport.authenticate('jwt', { session: false }),
    bookmarkController.deleteBookmark
);

module.exports = router;
