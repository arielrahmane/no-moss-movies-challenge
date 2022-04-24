import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Movies from '../views/Movies.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    component: Movies,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
