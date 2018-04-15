<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="song.youtubeId"
      player-width="600"
      player-height="330">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
