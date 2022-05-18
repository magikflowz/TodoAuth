import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/Register.vue'
import Tracker from '../components/Tracker.vue'


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
            path: "/TaskTracker",
            component: Tracker,
        },
        
        
        {path: "/feed", component: () => import("../views/Feed.vue") },
    ]
});

export default router;