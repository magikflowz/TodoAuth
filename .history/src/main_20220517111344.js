import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Import the functions you need from the SDKs you need
