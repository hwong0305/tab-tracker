<template>
    <v-app id="app">
        <div id="nav">
            <NavBar />
        </div>
        <div class="main">
            <router-view/>
        </div>
    </v-app>
</template>

<script>
    import NavBar from './components/NavBar';
    export default {
        components: {
            NavBar
        }
    };
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
