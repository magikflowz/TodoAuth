import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/Register.vue'
import Tracker from '../components/Tracker.vue'
import SignIn from '../views/SignIn.vue'


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
            meta:{
                requiresAuth: true;
            }
        },

        {
            path: "/sign-in",
            component: SignIn,
        },
        
        {path: "/feed", 
        component: () => import("../views/Feed.vue"),
        meta: {
            requiresAuth: true,
        }
        },
    ]
});

export default router;