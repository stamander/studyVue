import { createRouter, createWebHistory } from 'vue-router'
import CompareGreatPersonView from '../views/CompareGreatPersonView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CompareGreatPersonView
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: PrivacyPolicyView
    }
  ]
})

export default router
