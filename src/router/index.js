import { createRouter, createWebHistory } from 'vue-router'
import Construction from '../views/Construction.vue'
import Home from '../views/Home.vue'

const router = createRouter({
   routes: [
    {path:'/',component:Construction},
    {path:'/home',component:Home},
  ]
})

export default router
