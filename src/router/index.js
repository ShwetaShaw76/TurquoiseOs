import { createRouter, createWebHistory } from 'vue-router'
import Homescreen from '@/components/Homescreen.vue'
import Toppanel from '@/components/Toppanel.vue'
import Appscreen from '@/components/Appscreen.vue'
import Language from '@/components/Language.vue'
import Calculator from '@/components/Calculator.vue'
import Google from '@/components/Google.vue'
import Phone from '@/components/Phone.vue'
import Contacts from '@/components/Contacts.vue'

const routes = [
  // { path:'/' , component:Language},
  { path:'/Calculator' , component:Calculator},
  { path:'/HomeScreen' , component:Homescreen},
  { path:'/Toppanel' , component:Toppanel},
  { path:'/Appscreen' , component:Appscreen},
  { path:'/Google' , component:Google},
  { path:'/Phone' , component:Phone},
  { path:'/' , component:Contacts},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
