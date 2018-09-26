import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        token: null,
        loggedIn: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.loggedIn = !!token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        setToken(context, token) {
            context.commit('setToken', token);
        },
        setUser(dispatch, user) {
            dispatch.commit('setUser', user);
        }
    }
});
