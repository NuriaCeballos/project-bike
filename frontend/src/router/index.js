import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Propuestas from '../views/Propuestas.vue'
import Artbike from '../views/Artbike.vue'
import Infobike from '../views/Infobike.vue'
import Login from '../views/Login.vue'
import Rutas from '../views/Rutas.vue'
import Comprar from '../views/Comprar.vue'
import Recuerdos from '../views/Recuerdos.vue'


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
  {
    path: '/comprar',
    name: 'comprar',
    component: Comprar
  },
  {
    path: '/recuerdos',
    name: 'recuerdos',
    component: Recuerdos
  },
  {
    path: '/rutas',
    name: 'rutas',
    component: Rutas
  }, 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
