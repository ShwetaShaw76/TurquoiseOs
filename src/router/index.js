import { createRouter, createWebHistory } from 'vue-router'
import Homescreen from '@/components/Homescreen.vue'
import Toppanel from '@/components/Toppanel.vue'
import Appscreen from '@/components/Appscreen.vue'
import Language from '@/components/Language.vue'
import Calculator from '@/components/Calculator.vue'

const routes = [
  // { path:'/' , component:Language},
  { path:'/' , component:Calculator},
  { path:'/HomeScreen' , component:Homescreen},
  { path:'/Toppanel' , component:Toppanel},
  { path:'/Appscreen' , component:Appscreen},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
