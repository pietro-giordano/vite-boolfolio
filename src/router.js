import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
      history: createWebHistory(),
      routes: [
            {
                  path: '/',
                  name: 'homepage',
                  component: AppHome
            }, {
                  path: '/project/:slug',
                  name: 'single-project',
                  component: SingleProject
            }
      ]
});

export { router };