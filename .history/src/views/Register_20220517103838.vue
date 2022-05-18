<template>
    <h1>Create an Account</h1>
    <p><input aria-label="Create a Account" type="text" placeholder="Email" v-model="email"/></p>
    <p><button @click="register">Register</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)) => {
        
    }
}
const signInWithGoogle = () => {
    
};
</script>