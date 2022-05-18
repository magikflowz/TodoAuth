import { createRouter, createWebHistory } from "vue-router";
import Register from '../components/Register.vue'


const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {path: "/", 
        component: () => import("../views/Home.vue") },
        {path: "/register", 
        component: () => import("../components/Register.vue") },
        {path: "/sign-in", component: () => import("../views/SignIn.vue") },
        {path: "/feed", component: () => import("../views/Feed.vue") },
    ]
});

export default router;