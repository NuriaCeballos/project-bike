import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Propuestas from '../views/Propuestas.vue'
import Artbike from '../views/Artbike.vue'
import Infobike from '../views/Infobike.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/propuestas',
    name: 'propuestas',
    component: Propuestas
  },
  {
    path: '/artbike',
    name: 'artbike',
    component: Artbike
  },
  {
    path: '/infobike',
    name: 'infobike',
    component: Infobike
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
