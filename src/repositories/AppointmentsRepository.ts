import api from '@/api/api'

export default {
  async getPastAppointments() {
    const { data } = await api.get('/past-appointments')
    return data
  },

  async getNextAppointments() {
    const { data } = await api.get('/next-appointments')
    return data
  },
}
