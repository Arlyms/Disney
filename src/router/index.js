import { createRouter, createWebHashHistory } from 'vue-router'
import E1 from '../views/Enigme1.vue'
import E2 from '../views/Enigme2.vue'
import E3 from '../views/Enigme3.vue'
import E4 from '../views/Enigme4.vue'
import E5 from '../views/Enigme5.vue'
import E6 from '../views/Enigme6.vue'
import E7 from '../views/Enigme7.vue'
import E8 from '../views/Enigme8.vue'
import E9 from '../views/Enigme9.vue'
import E10 from '../views/Bravo.vue'

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
  },
  {
    path: '/4',
    name: '4',
    component: E4,
    meta: { requiresPassword: true }
  },  
  {
    path: '/5',
    name: '5',
    component: E5,
    meta: { requiresPassword: true }
  },
  {
    path: '/6',
    name: '6',
    component: E6,
    meta: { requiresPassword: true }
  },
  {
    path: '/7',
    name: '7',
    component: E7,
    meta: { requiresPassword: true }
  },
  {
    path: '/8',
    name: '8',
    component: E8,
    meta: { requiresPassword: true }
  },
  {
    path: '/9',
    name: '9',
    component: E9,
    meta: { requiresPassword: true }
  },   
  {
    path: '/10',
    name: '10',
    component: E10,
    meta: { requiresPassword: true }
  }          
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
