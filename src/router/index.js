import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/home-component.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeComponent,
    },
    {
        path: "/:type",
        name: "stories",
        component: () => import("../views/all-news.vue"),
    },
    {
        path: '/user/:userid',
        name: 'userPage',
        component: () => import("../views/user.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
