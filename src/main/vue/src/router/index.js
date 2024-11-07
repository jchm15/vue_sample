import { createWebHistory, createRouter } from "vue-router";

const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: () => import("./views/Home.vue"),
    // },
    // {
    //     path: "/test",
    //     name: "Test",
    //     component: () => import("./views/Test.vue"),
    // },
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});

export default index;