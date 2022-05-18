<template>
    <nav>
    <router-link to="/"> Home |</router-link>
    <router-link to="/feed"> Feed |</router-link>
    <router-link to="/register>"> Register |</router-link>
    <router-link to="/sign-in"> Login </router-link>    
    <h1>Sign Into Account</h1>
    <p><input aria-label="Create a Account" type="text" placeholder="Email" v-model="email"/></p>
    <p><input aria-label="Create a Account" type="password" placeholder="Password" v-model="password"/></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="SignIn">Sign Into an Account</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter();

const register = () => {
    signInWithEmailAndPassword(Auth, email.value, password.value)
    .then((data) => {
        console.log("Sign in Successfully");
        console.log(auth.currentUser)
        router.push('/Tracker')
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code){
            case "auth/invalid-email":
                errMsg.value = "Invalid email"
        }
    });
}
const signInWithGoogle = () => {
    
};
</script>