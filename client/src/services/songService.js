import Api from './Api';

export default {
    index() {
        return Api().get('/songs');
    },
    add(song) {
        return Api().post('/songs/add', song);
    },
    find(id) {
        return Api().get(`/songs/${id}`);
    },
    delete(song) {
        return Api().post('/songs/delete', song);
    }
};
