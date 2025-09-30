<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  appointments: {
    id: number
    doctor: string
    specialty: string
    address: string
    date: string
    time: string
  }[]
}>()
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
        <h2>{{ appointment.doctor }}</h2>
        <p class="text-grayScale-3 font-semibold">{{ appointment.specialty }}</p>
        <p class="text-grayScale-3 text-sm flex items-center gap-1">
          <Icon icon="mdi:map-marker" class="w-4 h-4 text-grayScale-2" />
          {{ appointment.address }}
        </p>
      </div>
      <div class="text-sm text-grayScale-3">
        Realizada em <br />
        <span class="font-medium">{{ appointment.date }} às {{ appointment.time }}</span>
      </div>
    </div>
  </section>
</template>
