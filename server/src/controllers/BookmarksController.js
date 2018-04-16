const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to find a Bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const songId = req.body.params.SongId
      const userId = req.body.params.UserId
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have set this as a bookmark'
        })
      } else {
        const newbookmark = await Bookmark.create({
          SongId: songId,
          UserId: userId
        })
        res.send(newbookmark)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add a bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while deleting a bookmark'
      })
    }
  }
}
