<template>
    <v-container class="home" fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex md6>
                <Panel title="Songs" first="true">
                    <v-data-table :headers="headers" :items="songs" class="elevation-1">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{props.item.title}}</td>
                            <td class="text-xs-left">{{props.item.artist}}</td>
                            <td class="text-xs-left">{{props.item.album}}</td>
                            <td class="px-0">
                                <v-btn flat icon v-on:click="tableNavigate(props.item)">
                                    <v-icon small>edit</v-icon>
                                </v-btn>
                            </td>
                        </template>
                    </v-data-table>
                </Panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
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
                { text: 'Title', value: 'title' },
                { text: 'Arist', value: 'artist' },
                { text: 'Album', value: 'album' },
                { text: 'Actions', value: 'action', sortable: false }
            ],
            songs: []
        };
    },
    mounted: async function() {
        this.songs = (await songService.index()).data;
    },
    methods: {
        tableNavigate: function(item) {
            alert(item.id);
        }
    }
};
</script>
