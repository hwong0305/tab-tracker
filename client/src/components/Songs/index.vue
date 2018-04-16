<template>
  <v-layout align-center justify-center>
    <v-flex xs6>
      <songs-search-panel />
      <songs-panel :songs="songs" class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  data () {
    return {
      songs: {}
    }
  },
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
