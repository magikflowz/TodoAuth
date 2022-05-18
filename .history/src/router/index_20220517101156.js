import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {path: "/", component: () => import("../views/Home.vue") },
        {path: "/register", component: () => import("../views/Home.vue") },
        {path: "/sign-in", component: () => import("../views/Home.vue") },
        {path: "/", component: () => import("../views/Home.vue") },
    ]
});

export default router;