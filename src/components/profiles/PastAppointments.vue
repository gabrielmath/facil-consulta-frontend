<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import AppointmentRepository from '@/repositories/AppointmentsRepository.ts'

const appointments = ref<object>({})

onMounted(async () => {
  await getListAppointments()
})

const getListAppointments = async () => {
  try {
    const { data } = await AppointmentRepository.getPastAppointments()
    appointments.value = data
  } catch (e) {
    console.log(e.message)
  }
}
</script>

<template>
  <section class="bg-white rounded-xl shadow p-6">
    <header class="flex items-center gap-2 text-grayScale-3 font-semibold text-lg mb-4">
      <Icon icon="mdi:calendar-repeat" class="w-7 h-7" />
      <h2>Consultas anteriores</h2>
    </header>
    <div
      v-for="appointment in appointments"
      :key="appointment.id"
      class="py-4 border-t first:border-t-2 border-t-grayScale-1 flex justify-between items-center"
    >
      <div>
        <h2>{{ appointment.doctor.name }}</h2>
        <p class="text-grayScale-3 font-semibold">{{ appointment.doctor.specialty }}</p>
        <p class="text-grayScale-3 text-sm flex items-center gap-1">
          <Icon icon="mdi:map-marker" class="w-4 h-4 text-grayScale-2" />
          {{ appointment.doctor.full_address }}
        </p>
      </div>
      <div class="text-sm text-grayScale-3">
        Realizada em <br />
        <span class="font-medium"
          >{{ appointment.schedule.date }} às {{ appointment.schedule.time }}</span
        >
      </div>
    </div>
  </section>
</template>
