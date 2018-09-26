<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue darken-4">
                        <v-toolbar-title>Songs</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="title" label="Title" />
                            <v-text-field v-model="artist" label="Artist" />
                            <v-text-field v-model="album" label="Album" />
                            <v-text-field v-model="albumImg" label="Album Image URL" />
                            <v-text-field v-model="youtubeUrl" label="YouTube URL" />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on:click="addSong">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex';
    import songService from '../services/songService';
    export default {
        data: function() {
            return {
                title: '',
                artist: '',
                album: '',
                albumImg: '',
                youtubeUrl: ''
            };
        },
        computed: mapState({
            user: 'user'
        }),
        methods: {
            async addSong() {
                try {
                    const song = {
                        UserId: this.user.id,
                        title: this.title,
                        artist: this.artist,
                        album: this.album,
                        albumImg: this.albumImg,
                        youtubeUrl: this.youtubeUrl
                    };
                    await songService.add(song);
                    this.$router.push({
                        name: 'home'
                    });
                } catch (error) {
                    alert(error);
                }
            }
        }
    };
</script>

<style scoped>
</style>
