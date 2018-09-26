const { Song } = require('../models');
const { Bookmark } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const songs = await Song.findAll({
                include: Bookmark
            });
            res.send(songs);
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    },
    async add(req, res) {
        try {
            const song = await Song.create({
                UserId: req.body.UserId,
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                albumImg: req.body.albumImg,
                youtubeUrl: req.body.youtubeUrl
            });
            res.send(song);
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: error
            });
        }
    },
    async edit(req, res) {
        try {
            const song = await Song.findById(req.body.id);
            if (req.body.UserId === song.UserId) {
                if (song) {
                    song.update({
                        title: req.body.title,
                        artist: req.body.artist,
                        album: req.body.album,
                        albumImg: req.body.albumImg,
                        youtubeUrl: req.body.youtubeUrl
                    });
                    res.send(song);
                } else {
                    res.status(404).send('SONG NOT FOUND');
                }
            } else {
                res.status(401).send({
                    error: 'You do not have access to this'
                });
            }
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    },
    async find(req, res) {
        try {
            const song = await Song.findById(req.params.id, {
                include: Bookmark
            });
            if (song) {
                res.send(song);
            } else {
                res.status(404).send('SONG NOT FOUND');
            }
        } catch (error) {
            res.status(500).send({
                error
            });
        }
    },
    async delete(req, res) {
        try {
            const song = await Song.findById(req.body.id);
            if (song.UserId === req.body.UserId) {
                if (song) {
                    await song.destroy();
                    res.send({
                        success: true
                    });
                } else {
                    res.status(404).send('SONG NOT FOUND');
                }
            } else {
                res.status(401).send({
                    error: 'You do not have access to this.'
                });
            }
        } catch (error) {
            res.status(500).send({
                error
            });
        }
    }
};
