import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('the-header', { Header })
app.component('the-navbar', { Navbar })
app.component('the-card', { Card })
app.component('the-footer', { Footer })
app.mount('#app')
