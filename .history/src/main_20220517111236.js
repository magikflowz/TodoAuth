import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Import the functions you need from the SDKs you need


createApp(App).use(router).mount('#app')