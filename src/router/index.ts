import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MoviesTab from '../views/MoviesTab.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    component: MoviesTab,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
