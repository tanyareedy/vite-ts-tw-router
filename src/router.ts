import {createRouter, createWebHistory} from "vue-router";
import Index from "./vues/Index.vue";
import About from "./vues/About.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            name: 'about',
            path: '/about',
            component: About
        }
    ]
});

export default router;