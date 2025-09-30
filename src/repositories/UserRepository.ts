import api from '@/api/api'

export default {
  async login(payload: { email: string; password: string }) {
    const { data } = await api.post('/login', payload)
    return data
  },

  async getProfile() {
    const { data } = await api.get('/user/profile')
    return data
  },

  async updateProfile(payload: { name: string; email: string }) {
    const { data } = await api.put('/user/profile', payload)
    return data
  },

  async logout() {
    return api.post('/logout')
  },
}
