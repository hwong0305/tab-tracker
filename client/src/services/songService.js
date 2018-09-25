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
    }
};
