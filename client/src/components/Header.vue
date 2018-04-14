<template>
  <v-toolbar dark dense app color="primary">
    <v-toolbar-side-icon>
      <v-btn flat @click="navigateTo({name: 'HelloWorld'})">
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar-side-icon>
    <v-toolbar-title>TabTracker</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        @click="navigateTo({name: 'Songs'})"
      >Browse</v-btn>
      <v-btn
        flat
        @click="logout"
        v-if="$store.state.isUserLoggedIn">Logout</v-btn>
      <v-btn
        flat
        @click="navigateTo({name: 'Login'})"
        v-if="!$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn
        flat
        @click="navigateTo({name: 'Register'})"
        v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'HelloWorld'})
    }
  }
}
</script>

<style scoped>

</style>
