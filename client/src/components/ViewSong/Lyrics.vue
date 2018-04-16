<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style>
  textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 300px;
    overflow: auto;
    padding: 40px;
  }
</style>
