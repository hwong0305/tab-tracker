<template>
  <v-layout align-center justify-center>
    <v-flex xs6>
      <panel title="Songs">
        <v-toolbar-items slot="toolbar">
          <v-btn
            @click="navigateTo({name: 'CreateSongs'})"
            flat>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar-items>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout align-center justify-center>
            <v-flex xs10>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-album">
                {{song.album}}
              </div>
              <v-btn
                color="primary"
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id}
                    }
                )">
                View Song
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: {}
    }
  },
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 20px;
}

.song-album {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
