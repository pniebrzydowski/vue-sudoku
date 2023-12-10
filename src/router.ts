import SplashScreen from './components/screens/SplashScreen.vue'
import PlayScreen from './components/screens/PlayScreen.vue'
import GameOverScreen from './components/screens/GameOverScreen.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: PlayScreen },
  { path: '/game-over', component: GameOverScreen },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
