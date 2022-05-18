import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyAHOKHnHvyFQ7zVengBaN8k-GCLmmHfLA0",
    authDomain: "notionflux.firebaseapp.com",
    projectId: "notionflux",
    storageBucket: "notionflux.appspot.com",
    messagingSenderId: "1078624709328",
    appId: "1:1078624709328:web:25e289723679a969b7ccd5",
    measurementId: "G-17RYV6320R"
  };
  
  // Initialize Firebase
  const fireapp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(fireapp)