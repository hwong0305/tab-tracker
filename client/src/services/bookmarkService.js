import Api from './Api';

export default {
    find(id) {
        return Api().get(`/bookmarks/${id}`);
    },
    add(item) {
        return Api().post('/bookmarks/add', item);
    },
    delete(item) {
        return Api().post('/bookmarks/delete', item);
    },
    isBookmarked(song, user) {
        const bookmark = song.Bookmarks.filter(data => data.UserId === user.id);
        const userFilteredBookmark = bookmark.filter(
            data => data.SongId === song.id
        );
        if (userFilteredBookmark.length > 0) {
            return false;
        } else {
            return true;
        }
    }
};
