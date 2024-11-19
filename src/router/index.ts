import { createRouter, createWebHistory } from 'vue-router'
import CompareGreatPersonView from '../views/CompareGreatPersonView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import CompareMoneyView from '../views/CompareMoneyView.vue'
import SuccessSubscriptionView from '../views/SuccessSubscriptionView.vue'
import CancelSubscriptionView from '../views/CancelSubscriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CompareGreatPersonView
    },
    {
      path: '/CompareMoney',
      name: 'CompareMoney',
      component: CompareMoneyView
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: PrivacyPolicyView
    },
    {
      path: '/success-subscription',
      name: 'successSubscription',
      component: SuccessSubscriptionView
    },
    {
      path: '/cancel-subscription',
      name: 'cancelSubscription',
      component: CancelSubscriptionView
    }
  ]
})

export default router
