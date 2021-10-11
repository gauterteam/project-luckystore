import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

const app = createApp(App)
app.use(router)
app.component('the-header', { Header })
app.component('the-navbar', { Navbar })
app.component('the-card', { Card })
app.component('the-footer', { Footer })
app.mount('#app')
