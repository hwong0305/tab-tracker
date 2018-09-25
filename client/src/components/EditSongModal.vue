<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn slot="activator" color="info" dark>Edit Song</v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">Edit Song</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-flex>
                        <v-text-field v-model="song.title" label="Title" />
                        <v-text-field v-model="song.artist" label="Artist" />
                        <v-text-field v-model="song.album" label="Album" />
                        <v-text-field v-model="song.albumImg" label="Album Image URL" />
                        <v-text-field v-model="song.youtubeUrl" label="YouTube URL" />
                    </v-flex>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="error" @click.native="dialog = false">Cancel</v-btn>
                <v-btn color="primary" @click="handleSubmit()">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import songService from '../services/songService';
    export default {
        name: 'EditSong',
        data: function() {
            return {
                dialog: false
            };
        },
        props: {
            song: {
                title: '',
                artist: '',
                album: '',
                albumImg: '',
                youtubeUrl: ''
            }
        },
        methods: {
            handleSubmit: async function() {
                try {
                    await songService.update(this.song);
                    this.dialog = false;
                } catch (error) {
                    alert(error);
                }
            }
        }
    };
</script>

<style scoped>
</style>
