import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token',{
  state: () => ({
    token: '',
    userId: ''
  }),
  getters: {
  },
  actions: {
  }
})
