const {Song, Bookmark} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({},
          bookmark.Song,
          bookmark))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to find a Bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const songId = req.body.params.SongId
      const userId = req.user.id
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findOne({
        where: where
      })
      if (bookmarks) {
        return res.status(400).send({
          error: 'You already have set this as a bookmark'
        })
      } else {
        const newbookmark = await Bookmark.create(where)
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
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while deleting a bookmark'
      })
    }
  }
}
