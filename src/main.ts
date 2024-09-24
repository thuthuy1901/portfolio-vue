import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

createApp(App)
    .use(router)
    .use(Vue3Toastify, {
        limit: 2,
    })
    .mount('#app')
