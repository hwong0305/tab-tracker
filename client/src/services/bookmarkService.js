import Api from './Api';

export default {
    find(id) {
        return Api().get(`/bookmarks/${id}`);
    },
    add(item) {
        return Api().post('/bookmarks/add', item);
    }
};
