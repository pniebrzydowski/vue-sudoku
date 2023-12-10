import SplashScreen from './components/SplashScreen.vue'
import PlayScreen from './components/PlayScreen.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: PlayScreen },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
