<template>
  <panel title="Songs">
    <v-toolbar-items slot="toolbar">
      <v-btn
        :to="{name: 'CreateSongs'}"
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
            :to="{
              name: 'song',
              params: {
                songId: song.id}
            }">
            View Song
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'songs'
  ]
}
</script>

<style scoped>

</style>
