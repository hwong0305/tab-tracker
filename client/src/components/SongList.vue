<template>
    <div id="container">
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
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import songService from '../services/songService';
    export default {
        name: 'SongList',
        data: function() {
            return {
                headers: [
                    { text: 'Number', value: 'id' },
                    { text: 'Title', value: 'title' },
                    { text: 'Arist', value: 'artist' },
                    { text: 'Album', value: 'album' }
                ],
                songs: []
            };
        },
        mounted: async function() {
            this.songs = (await songService.index()).data;
        },
        computed: mapState({
            loggedIn: 'loggedIn'
        }),
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

<style scoped>
    #container {
        height: 400px;
    }
</style>
