import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        loggedIn: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.loggedIn = !!token;
        }
    },
    actions: {
        setToken(context, token) {
            context.commit('setToken', token);
        }
    }
});
