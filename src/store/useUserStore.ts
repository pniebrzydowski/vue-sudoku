import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = 'Patrick'

  return { name }
})
