<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center wrap>
            <v-flex md6 xs12>
                <!-- Use the prop first=true to display the add symbol -->
                <Panel title="Song Information" class="mr-1">
                    <v-flex md6>
                        <h3>{{song.artist}}</h3>
                        <h3>{{song.title}}</h3>
                        <h3>{{song.album}}</h3>
                    </v-flex>
                    <v-flex md6 xs12>
                        <img :src="song.albumImg" id="albumImg" />
                    </v-flex>
                </Panel>
            </v-flex>
            <v-flex md6 xs12>
                <Panel title="YouTube" class="ml-1">
                </Panel>
            </v-flex>
            <v-flex md12 xs12 class="mt-4">
                <v-btn color="info">Edit</v-btn>
                <v-btn color="error">Delete</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Panel from '../components/Panel';
import songService from '../services/songService';
export default {
    components: {
        Panel
    },
    data: function() {
        return {
            song: {
                title: '',
                artist: '',
                album: '',
                albumImg: '',
                youtubeUrl: ''
            }
        };
    },
    mounted: async function() {
        try {
            const song = (await songService.find(this.$route.params.id)).data;
            this.song = song;
        } catch (error) {
            console.log({ error });
        }
    }
};
</script>

<style scoped>
#albumImg {
    height: 200px;
    width: 200px;
}
</style>
