import { createRouter, createWebHistory } from 'vue-router'
import Men from '@/views/Men.vue'
import Women from '@/views/Women.vue'
import Sale from '@/views/Sale.vue'
import Info from '@/views/Info.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/men',
    name: 'men',
    component: Men
  },
  {
    path: '/women',
    name: 'women',
    component: Women
  },
  {
    path: '/sale',
    name: 'sale',
    component: Sale
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
