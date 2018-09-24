<template>
    <v-toolbar fixed color="blue darken-4" dark dense>
        <v-btn flat icon to="/">
            <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-title>TabTracker</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat v-if="!loggedIn" to="/login">Login</v-btn>
            <v-btn flat v-if="!loggedIn" to="/register">Register</v-btn>
            <v-btn flat v-if="loggedIn" v-on:click="logout">Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'NavBar',
        methods: {
            logout() {
                this.$store.dispatch('setToken', null);
            }
        },
        computed: mapState({
            loggedIn: 'loggedIn'
        })
    };
</script>


<style scoped>
</style>
