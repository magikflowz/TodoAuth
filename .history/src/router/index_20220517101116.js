import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory(),

    routers: [
        path: "/", component: () => import("../views/Home.vue") },
    ]
});

export default router;