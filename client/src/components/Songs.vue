<template>
  <panel title="Songs">
    <v-toolbar-items slot="toolbar">
      <v-btn
        @click="navigateTo({name: 'CreateSongs'})"
        flat>
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar-items>
    <div v-for="song in songs" :key="song.title">
      {{song.title}} - {{song.artist}} - {{song.album}}
    </div>
  </panel>
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

</style>
