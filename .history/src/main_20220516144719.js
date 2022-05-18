import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fire from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAHOKHnHvyFQ7zVengBaN8k-GCLmmHfLA0",
    authDomain: "notionflux.firebaseapp.com",
    projectId: "notionflux",
    storageBucket: "notionflux.appspot.com",
    messagingSenderId: "1078624709328",
    appId: "1:1078624709328:web:25e289723679a969b7ccd5",
    measurementId: "G-17RYV6320R"
};

firebase.initalize

createApp(App).use(router).mount('#app')
