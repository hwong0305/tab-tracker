<template>
    <v-container class="home" fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex md6 class="mr-2">
                <v-toolbar flat color="white">
                    <v-toolbar-title>Bookmark</v-toolbar-title>
                </v-toolbar>
            </v-flex>
            <v-flex md6 id="song">
                <v-toolbar flat color="white">
                    <v-toolbar-title>Songs</v-toolbar-title>
                    <v-spacer />
                    <v-toolbar-items>
                        <v-btn flat icon v-if="loggedIn" to='/songs/add'>
                            <v-icon>add</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-data-table :headers="headers" :items="songs">
                    <template slot="items" slot-scope="props">
                        <tr @click="handleClick(props.item.id)">
                            <td class="px-0">{{props.item.id}}</td>
                            <td class="text-md-left">{{props.item.title}}</td>
                            <td class="text-xs-left">{{props.item.artist}}</td>
                            <td class="text-xs-left">{{props.item.album}}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import songService from '../services/songService';
import Panel from '../components/Panel';
export default {
    name: 'home',
    components: {
        Panel
    },
    data: function() {
        return {
            headers: [
                { text: 'Number', value: 'id' },
                { text: 'Title', value: 'title' },
                { text: 'Arist', value: 'artist' },
                { text: 'Album', value: 'album' }
            ],
            bookmarkHeaders: [
                { text: 'Number', value: 'id' },
                { text: 'Title', value: 'Song.title' },
                { text: ' Artist', value: 'Song.artist' }
            ],
            songs: [],
            bookmarks: []
        };
    },
    mounted: async function() {
        this.songs = (await songService.index()).data;
    },
    computed: {
        // Not necessary but implemented if need more computed items after.
        ...mapState({
            loggedIn: 'loggedIn'
        })
    },
    methods: {
        handleClick: function(id) {
            this.$router.push({
                name: 'song',
                params: {
                    id: id
                }
            });
        }
    }
};
</script>
