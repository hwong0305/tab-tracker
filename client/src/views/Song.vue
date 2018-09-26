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
                    <youtube :video-id="song.youtubeUrl.slice(32)" height="300" />
                </Panel>
            </v-flex>
            <v-flex md12 xs12 class="mt-4" v-if="writeAccess">
                <v-btn v-on:click="addBookmark()">Bookmark</v-btn>
                <edit-song :song="song" />
                <v-btn color="error" v-on:click="deleteSong()">Delete</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex';
    import Panel from '../components/Panel';
    import songService from '../services/songService';
    import bookmarkService from '../services/bookmarkService';
    import EditSong from '../components/EditSongModal';
    export default {
        components: {
            EditSong,
            Panel
        },
        data: function() {
            return {
                bookmarked: false,
                song: {
                    id: '',
                    title: '',
                    artist: '',
                    album: '',
                    albumImg: '',
                    youtubeUrl: '',
                    UserId: null
                },
                writeAccess: false
            };
        },
        mounted: async function() {
            try {
                const song = (await songService.find(this.$route.params.id)).data;
                this.song = song;
                if (this.user.id === song.UserId) {
                    this.writeAccess = true;
                }
            } catch (error) {
                console.log({ error });
            }
        },
        computed: mapState({
            loggedIn: 'loggedIn',
            user: 'user'
        }),
        methods: {
            async deleteSong() {
                try {
                    await songService.delete(this.song);
                    this.$router.push({
                        name: 'home'
                    });
                } catch (error) {
                    alert('Error deleting song');
                }
            },
            async addBookmark() {
                try {
                    if (this.loggedIn) {
                        const item = {
                            UserId: this.user.id,
                            SongId: this.song.id
                        };
                        await bookmarkService.add(item);
                    }
                } catch (error) {
                    console.log(error);
                    alert('Error adding bookmark');
                }
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
