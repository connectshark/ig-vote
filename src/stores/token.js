import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token',{
  state: () => ({
    token: import.meta.env.VITE_TOKEN ||  '',
    userId: import.meta.env.VITE_USER_ID || ''
  }),
  getters: {
  },
  actions: {
  }
})
