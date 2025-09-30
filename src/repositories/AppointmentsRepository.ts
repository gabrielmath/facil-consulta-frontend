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

  async newAppointments(payload: { doctor_id: number; doctor_schedule_id: number }) {
    const { data } = await api.post('/appointment', payload)
    return data
  },
}
