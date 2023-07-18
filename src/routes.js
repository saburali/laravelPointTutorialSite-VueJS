import {createWebHashHistory, createRouter} from 'vue-router'
import Home from "@/pages/Home";
import Tutorials from "@/pages/Tutorials";
import Practice from "@/pages/Practice";
import Challenges from "@/pages/Challenges";
import Contact from "@/pages/Contact";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Tutorials',
        path: '/tutorials',
        component: Tutorials
    },
    {
        name: 'Practice',
        path: '/practice',
        component: Practice
    },
    {
        name: 'Challenges',
        path: '/challenges',
        component: Challenges
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router