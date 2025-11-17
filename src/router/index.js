import { createRouter, createWebHashHistory } from 'vue-router'
import E1 from '../views/Enigme1.vue'
import E2 from '../views/Enigme2.vue'
import E3 from '../views/Enigme3.vue'

const routes = [
  {
    path: '/',
    name: 'Enigme1',
    component: E1
  },
  {
    path: '/2',
    name: '2',
    component: E2,
    meta: { requiresPassword: true }
  },
  {
    path: '/3',
    name: '3',
    component: E3,
    meta: { requiresPassword: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
