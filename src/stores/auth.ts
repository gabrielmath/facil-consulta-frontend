import { defineStore } from 'pinia'
import UserRepository from '@/repositories/UserRepository'

interface User {
  id: number
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  persist: true,
  actions: {
    async login(email: string, password: string) {
      const { token, user } = await UserRepository.login({ email, password })
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    async register(name: string, email: string, password: string) {
      const { token, user } = await UserRepository.register({ name, email, password })
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
  },
})
