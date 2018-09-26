<template>
    <div id="container">
        <v-toolbar flat color="white">
            <v-toolbar-title>Bookmark</v-toolbar-title>
        </v-toolbar>
        <v-data-table :headers="headers" :items="bookmarks">
            <template slot="items" slot-scope="props">
                <tr @click="handleClick(props.item.id)">
                    <td class="px-0">{{props.item.id}}</td>
                    <td class="text-md-left">{{props.item.Song.title}}</td>
                    <td class="text-xs-left">{{props.item.Song.artist}}</td>
                    <td class="text-xs-left">{{props.item.Song.album}}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import bookmarkService from '../services/bookmarkService';
    import { mapState } from 'vuex';
    export default {
        name: 'BookmarkList',
        data: function() {
            return {
                bookmarks: [],
                headers: [
                    { text: 'Number', value: 'id' },
                    { text: 'Title', value: 'Song.title' },
                    { text: 'Artist', value: 'Song.artist' },
                    { text: 'Album', value: 'Song.album' }
                ]
            };
        },
        computed: mapState({
            loggedIn: 'loggedIn',
            user: 'user'
        }),
        mounted: async function() {
            if (this.loggedIn) {
                this.bookmarks = (await bookmarkService.find(this.user.id)).data;
            }
        }
    };
</script>

<style scoped>
    #container {
        height: 400px;
    }
</style>
