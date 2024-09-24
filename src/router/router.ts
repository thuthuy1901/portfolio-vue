import { createRouter, createWebHistory } from 'vue-router'
import SinglePage from '../views/SinglePage.vue'

const routes = [
    {
        path: '/',
        name: 'SinglePage',
        component: SinglePage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
