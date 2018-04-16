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
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>

</style>
