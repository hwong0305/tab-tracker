import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('/songs', {
      params: {
        search: search
      }
    })
  },
  post (songs) {
    return Api().post('/songs', songs)
  },
  show (songId) {
    return Api().get(`/songs/${songId}`)
  },
  put (song) {
    return Api().post(`/songs/${song.id}`, song)
  }
}
