<template>
  <v-toolbar dark dense app color="primary">
    <v-toolbar-title>
      <router-link
        tag="span"
        class="home"
        :to="{name: 'HelloWorld'}">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        :to="{name: 'Songs'}"
      >Browse</v-btn>
      <v-btn
        flat
        @click="logout"
        v-if="$store.state.isUserLoggedIn">Logout</v-btn>
      <v-btn
        flat
        :to="{name: 'Login'}"
        v-if="!$store.state.isUserLoggedIn">Login</v-btn>
      <v-btn
        flat
        :to="{name: 'Register'}"
        v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'HelloWorld'})
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}

</style>
