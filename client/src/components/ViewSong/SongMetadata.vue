<template>
  <panel title="Song Metadata">
          <v-layout align-center justify-center>
            <v-flex xs5>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-album">
                {{song.album}}
              </div>
              <br>
              <v-btn
                color="primary"
                @click="navigateTo({
                  name: 'song-edit',
                  params: {
                    songId: song.id
                  }
                })"
              >
                Edit
              </v-btn>
            </v-flex>
            <v-flex xs7>
              <img class="album-image" :src="song.albumImageUrl"/>
              <br>
              {{song.genre}}
            </v-flex>
          </v-layout>
        </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style>

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
  width: 86.5%;
  margin: 2 auto;
}

</style>
