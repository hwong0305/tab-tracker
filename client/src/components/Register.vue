<template>
  <v-layout align-center justify-center>
    <v-flex xs6>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Registration</v-toolbar-title>
      </v-toolbar>
      <v-form class="elevation-6 px-2">
        <v-text-field
          label="E-mail"
          type="email"
          v-model="email"
        />
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        />
        <div>
          <div class="red-text" v-html="error" />
          <v-btn
            @click="register"
            color="primary"
          >Register</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        this.error = null
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.User)
        this.$router.push({name: 'Songs'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.red-text {
  color: red
}
</style>
