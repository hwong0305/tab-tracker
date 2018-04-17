<template>
  <v-container fluid>
    <v-layout row wrap>
        <v-flex xs6>
          <song-metadata :song="song" />
        </v-flex>
        <v-flex xs6>
          <you-tube :song="song" class="ml-2"/>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <tab class="mt-2" :song="song"/>
      </v-flex>
        <v-flex xs6>
          <lyrics class="ml-2 mt-2" :song="song"/>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import SongService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsHistoryService from '@/services/SongsHistoryService'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongsHistoryService.post({
        SongId: songId,
        UserId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

panel {
  height: 600;
}

</style>
