import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register')
        },
        {
            path: '/songs',
            name: 'song',
            component: () => import('./views/Song')
        },
        // Both the Edit and Add Song uses the same Vue Component
        {
            path: '/songs/add',
            name: 'addSong',
            component: () => import('./views/SongForm')
        },
        {
            path: '/songs/:id/edit',
            name: 'editSong',
            component: () => import('./views/SongForm')
        }
    ]
});
