<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue darken-4">
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field name="firstName" label="First Name" v-model="firstName" type="text" />
                            <v-text-field name="lastName" label="Last Name" v-model="lastName" type="text" />
                            <v-text-field name="email" label="E-mail" v-model="email" type="text" />
                            <v-text-field name="password" label="Password" v-model="password" type="password" />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on:click="userRegister">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import authService from '../services/authService';
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            };
        },
        methods: {
            userRegister: async function() {
                try {
                    const user = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password
                    };
                    const response = await authService.register(user);
                    this.$router.push({
                        name: 'login'
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
