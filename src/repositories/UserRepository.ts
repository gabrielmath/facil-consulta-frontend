import api from '@/api/api'

export default {
  async login(payload: { email: string; password: string }) {
    const { data } = await api.post('/login', payload)
    return data
  },

  async register(payload: { name: string; email: string; password: string }) {
    const { data } = await api.post('/register', payload)
    return data
  },

  async logout() {
    return api.post('/logout')
  },
}
