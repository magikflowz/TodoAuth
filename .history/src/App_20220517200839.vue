<template>
 
    
<router-view/>
</nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user){
            isLoggedIn.value = true;
        }
        else { 
            isLoggedIn.value = false; }
    })
})

const handleSignOut = () => {
    signOut(auth).then(() =>{
        router.push("/")
    })

}
</script>