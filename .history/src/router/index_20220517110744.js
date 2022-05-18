import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/Register.vue'
import TaskTracker from '../views/TaskTracker.vue'


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
            component: TaskTracker,
        },
        
        {
            path: "/sign-in", 
            component: SignIn.vue") },
        {path: "/feed", component: () => import("../views/Feed.vue") },
    ]
});

export default router;