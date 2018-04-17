const {Song, History} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend({},
          history.Song,
          history))
      res.send(_.sortedUniqBy(history, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to find history'
      })
    }
  },
  async post (req, res) {
    try {
      const songId = req.body.params.SongId
      const userId = req.body.params.UserId
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const history = await History.create(where)
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add history'
      })
    }
  }
}
