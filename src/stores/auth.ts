// stores/auth.ts
import { defineStore } from 'pinia'
import UserRepository from '@/repositories/UserRepository'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; name: string; email: string },
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async fetchUser() {
      if (!this.token) return
      try {
        this.user = await UserRepository.getProfile()
      } catch {
        this.logout()
      }
    },
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },
})
