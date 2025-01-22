import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import WorksView from './views/WorksView.vue';

const routes = [
    { path: '/', component: HomeView, name: "home", },
    { path: '/about', component: AboutView, name: "about", },
    { path: '/works/:id', component: WorksView, name: "works", },
];
