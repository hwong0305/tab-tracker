<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue darken-4">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field id="email" name="email" label="E-mail" type="text" v-model="email" />
                            <v-text-field id="password" name="password" label="Password" type="password" v-model="password" />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on:click="userLogin">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import authService from '../services/authService';
    export default {
        name: 'Login',
        data: () => ({
            email: '',
            password: ''
        }),
        methods: {
            async userLogin() {
                try {
                    const user = {
                        email: this.email,
                        password: this.password
                    };
                    const response = await authService.login(user);
                    console.log(response);
                    this.$store.dispatch('setToken', response.data.token);
                    this.$router.push({
                        name: 'home'
                    });
                } catch (error) {
                    alert(error);
                }
            }
        }
    };
</script>

<style scoped>
</style>
