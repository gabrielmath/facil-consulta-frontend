import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Profile from '@/views/Profile.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        const auth = useAuthStore()
        if (!auth.isAuthenticated) {
          next('/') // volta pra home se não logado
        } else {
          next()
        }
      },
    },
  ],
})

export default router
