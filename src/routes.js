import {createWebHashHistory, createRouter} from 'vue-router'
import Home from "@/pages/Home";
import Index from "@/pages/Index";
import Tutorials from "@/pages/Tutorials";
import Practice from "@/pages/Practice";
import Challenges from "@/pages/Challenges";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import FreeTutorials from "@/pages/FreeTutorials";
import CoursePage from "@/pages/Course";
import ChallengeSingleInstructions from "@/pages/ChallengeSingleInstructions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CourseSingle from "@/pages/CourseSingle";

const routes = [
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Tutorials',
        path: '/tutorials',
        component: Tutorials
    },
    {
        name: 'FreeTutorials',
        path: '/free-tutorials',
        component: FreeTutorials
    },
    {
        name: 'Course',
        path: '/course',
        component: CoursePage
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
        name: 'ChallengeSingleInstructions',
        path: '/ChallengeSingleInstructions',
        component: ChallengeSingleInstructions
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'PrivacyPolicy',
        path: '/PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        name: 'CourseSingle',
        path: '/CourseSingle',
        component: CourseSingle
    },
    {
        name: 'NotFound',
        path: '/:catchAll(.*)', // Catch-all route
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router