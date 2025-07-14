import AboutView from '@renderer/views/AboutView.vue'
import HomeView from '@renderer/views/HomeView.vue'
import TestForDev from '@renderer/views/TestForDev.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/test', component: TestForDev }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
