import { createApp } from 'vue'
// import App from './App.vue'
import Hero from './Hero.vue'
import router from './router'

import './assets/Root.css'

const app = createApp(Hero)

app.use(router)

app.mount('#app')
