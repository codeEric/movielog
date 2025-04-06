import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue'
import WatchedView from '@/views/WatchedView.vue'
import WatchlistView from '@/views/WatchlistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView
    },
    {
      path: '/watched',
      name: 'watched',
      component: WatchedView
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchlistView
    }
  ],
})

export default router
