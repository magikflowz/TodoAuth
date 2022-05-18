<template>
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/feed"> Feed </router-link>
    <router-link to="/register>"    
    <h1>Create an Account</h1>
    <p><input aria-label="Create a Account" type="text" placeholder="Email" v-model="email"/></p>
    <p><input aria-label="Create a Account" type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Register</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered");
        router.push('/Tracker')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
}
const signInWithGoogle = () => {
    
};
</script>