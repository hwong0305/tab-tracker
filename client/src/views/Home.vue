<template>
    <v-container class="home" fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex md6 class="mr-2">
                <bookmark-list />
            </v-flex>
            <v-flex md6>
                <song-list />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Panel from '../components/Panel';
    import SongList from '../components/SongList';
    import BookmarkList from '../components/BookmarkList';
    export default {
        name: 'home',
        components: {
            BookmarkList,
            Panel,
            SongList
        }
    };
</script>

<style scoped>
</style>

