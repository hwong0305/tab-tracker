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
                :to="{
                  name: 'song-edit',
                  params () {
                    return {
                      songId: song.id
                    }
                  }
                }"
              >
                Edit
              </v-btn>
              <v-btn
                color="primary"
                v-if="isUserLoggedIn && !bookmark"
                @click="setAsBookmark">
                Bookmark
              </v-btn>
              <v-btn
                color="primary"
                v-if="isUserLoggedIn && bookmark"
                @click='unSetAsBookmark'>
                UnBookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmark = (await BookmarksService.index({
          songId: this.song.id,
        })).data
        if (bookmark.length) {
          this.bookmark = bookmark[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          SongId: this.song.id,
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unSetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
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
