import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/Register.vue'
import Tracker from '../components/Tracker.vue'
import SignIn from '../components/SignIn.vue'


const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {path: "/", 
        component: () => import("../views/Home.vue") 
        },
        
        {path: "/register",
        component: Register,
        },

        {
            path: "/Tracker",
            component: Tracker,
        },

        {
            path: "/sigin",
            component: SignIn,
        },
        
        {path: "/feed", component: () => import("../views/Feed.vue") },
    ]
});

export default router;