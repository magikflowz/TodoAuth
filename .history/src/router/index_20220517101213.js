import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {path: "/", component: () => import("../views/Home.vue") },
        {path: "/register", component: () => import("../views/Home.vue") },
        {path: "/sign-in", component: () => import("../views/Sign.vue") },
        {path: "/feed", component: () => import("../views/Home.vue") },
    ]
});

export default router;