import Api from '@/services/Api'

export default {
  index () {
    return Api().get('/songs')
  },
  post (songs) {
    return Api().post('/songs', songs)
  }
}
