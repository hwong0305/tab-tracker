<template>
  <v-layout row>
    <v-flex xs7>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
          :rules="[required]"
          required
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="song.artist"
          :rules="[required]"
          required
        ></v-text-field>
        <v-text-field
          label="Genre"
          v-model="song.genre"
          :rules="[required]"
          required
        ></v-text-field>
        <v-text-field
          label="Album"
          v-model="song.album"
          :rules="[required]"
          required
        ></v-text-field>
        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
          :rules="[required]"
          required
        ></v-text-field>
        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          :rules="[required]"
          required
        ></v-text-field>
      </panel>
    </v-flex>
      <v-flex xs10 class="ml-2">
        <panel title="Song Structure">
          <v-text-field
            label="Lyrics"
            v-model="song.lyrics"
            multi-line
            :rules="[required]"
            required
          ></v-text-field>
          <v-text-field
            label="Tab"
            v-model="song.tab"
            multi-line
            :rules="[required]"
            required
          ></v-text-field>
        </panel>
        <div class="red-text" v-html="error">
        </div>
        <v-btn color="primary" @click="create">Create Song</v-btn>
      </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: ''
    }
  },
  methods: {
    async create () {
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({name: 'Songs'})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.red-text {
  color: red;
}
</style>
