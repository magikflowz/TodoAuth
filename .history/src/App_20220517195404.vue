<template>
<nav>
    <router-link to="/"> Home |</router-link>
    <router-link to="/feed"> Feed |</router-link>
    <router-link to="/register>"> Register |</router-link>
    <router-link to="/sign-in"> Login | </router-link>
    <button @click="handleSignOut"> Sign out </button>  
    </nav>
    
<router-view/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    onAuthStateChanged(isLoggedIn)
})

const handleSignOut = () => {

}
</script>