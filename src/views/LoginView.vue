<template>
    <main>
        <form @submit.prevent="login(name, password)">
            <h2>Login</h2>

            <label for="name" v-if="name">Username</label>
            <input name="name" id="name" type="name" v-model="name" autocomplete="username" placeholder="Username"></input>
            <label for="password" v-if="password">Password</label>
            <input name="password" id="password" type="password" v-model="password" autocomplete="current-password" placeholder="Password"></input>

            <button type="submit" class="btn-attention">Login</button>
        </form>

        <a @click="register">I don't have an account</a>
        <p>{{ message }}</p>
    </main>
</template>

<script>
import LoginService from '@/services/LoginService';

export default {
    name: 'LoginView',
    data() {
        return {
            password: "",
            name: "",
            loginService: new LoginService(),
            message: ""
        }
    },
    methods: {
        async login(name, password) {
            const response = await this.loginService.login(name, password);
            if (response.success) {
                this.$router.push('collection');
            } else {
                this.message = response.error;
            }
        },
        register() {
            this.$router.push('register');
        }
    },
}
</script>
<style scoped>
main {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
}
form {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 20em;
}
form > * {
    width: 100%;
}
input {
    margin-bottom: 1em;
}
button {
    margin-top: 1em;
}
h2 {
    text-align: center;
    margin-bottom: .5em;
}
</style>