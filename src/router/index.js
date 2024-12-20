import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import Top12MyView from '../views/Top12MyView.vue'
import Top12CodingView from '../views/Top12CodingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/latest',
      name: 'latest',
      component: HomeView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: HomeView,
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: HomeView,
    },
    {
      path: '/toprated',
      name: 'toprated',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      component: HomeView,
    },
    {
      path: '/detail/:movieId',
      name: 'detail',
      component: DetailView,
      props: true
    },
    {
      path: '/top12/haneug',
      name: 'haneug',
      component: Top12MyView,
      props: true
    },
    {
      path: '/top12/coding',
      name: 'coding',
      component: Top12CodingView,
      props: true
    }
  ]
})

export default router
