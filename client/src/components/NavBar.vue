<template>
    <v-toolbar fixed color="blue darken-4" dark dense>
        <v-btn flat icon to="/">
            <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-title>TabTracker</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat to="/login">Login</v-btn>
            <v-btn flat to="/register">Register</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'NavBar'
    };
</script>


<style scoped>
</style>
