import { createWebHistory, createRouter } from "vue-router";

import App from '@/App.vue';
import Index from '@components/Index.vue';
import Sample1 from '@/components/sample/Sample_1.vue';
import Sample2 from '@/components/sample/Sample_2.vue';

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/sample1",
        name: "sample1",
        component: Sample1,
    },
    {
        path: "/sample2",
        name: "sample2",
        component: Sample2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;