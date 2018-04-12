<template>
  <div>
    <h3>Register</h3>
    <form action="">
      <input type="email" placeholder="email" v-model="email"><br>
      <input type="password" placeholder="password" v-model="password"><br>
      <button
        color="primary"
        @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
