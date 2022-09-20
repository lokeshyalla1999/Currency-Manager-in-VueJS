import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/currencyexchanger',
    name:'currencyexchanger',
    component:() => import('../views/CurrencyExchanger.vue')
  },

  {
    path:'/EditPage/:id',
    name:'editpage',
    component:() => import('../components/EditPage.vue')
  },
  {
    path:'/Additem',
    name:'Additem',
    component:() => import('../components/AddItem.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
