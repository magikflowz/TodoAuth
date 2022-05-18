import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



createApp(App).mount;('#app')
app.use(router);
