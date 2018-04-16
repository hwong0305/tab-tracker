<template>
  <v-layout align-center justify-center>
    <v-flex class="elevation-6">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer/>
        <slot name="toolbar"/>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No Slot Content Defined Here
        </slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
