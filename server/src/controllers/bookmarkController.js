const { Bookmark } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const bookmarks = await Bookmark.findAll({});
            res.send(bookmarks);
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: error
            });
        }
    },
    async addBookmark(req, res) {
        try {
            const bookmark = await Bookmark.create({
                UserId: req.body.UserId,
                SongId: req.body.SongId
            });
            res.send(bookmark);
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    },
    async deleteBookmark(req, res) {
        try {
            const bookmark = await Bookmark.find({
                where: {
                    UserId: req.body.UserId,
                    SongId: req.body.SongId
                }
            });
            if (bookmark) {
                bookmark.destroy();
                res.send('SUCCESS');
            } else {
                res.status(404).send({
                    messsage: 'BOOKMARK NOT FOUND'
                });
            }
        } catch (error) {
            res.status(500).send({
                error: error
            });
        }
    }
};
