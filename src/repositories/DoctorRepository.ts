import api from '@/api/api'

export default {
  async getDoctors() {
    const { data } = await api.get('/doctors')
    return data
  },
}
