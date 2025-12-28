import MoviesView from '@/views/MoviesView.vue'
import StartView from '@/views/StartView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startsida',
      component: StartView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    }
  ],
})

export default router
