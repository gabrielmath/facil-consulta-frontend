<script setup lang="ts">
import ScheduleCarousel from './ScheduleCarousel.vue'
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  specialty: string
  address: string
  schedules: Record<string, { id: number; time: string }[]>
  // formato:
  // {
  //   "2025-09-29": [{ id: 1, time: "15:00" }, { id: 2, time: "16:00" }],
  //   "2025-09-30": [...]
  // }
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col md:flex-row bg-grayScale-0 rounded shadow p-4 w-full gap-4">
    <!-- Dados do médico -->
    <div class="container">
      <div class="w-full flex justify-between items-center">
        <div class="w-full flex flex-col space-y-2">
          <h2>
            {{ name }}
          </h2>
          <p class="font-sans font-semibold text-pd text-grayScale-3">{{ specialty }}</p>
          <p class="font-sans text-sm text-grayScale-3 flex items-center gap-2">
            <Icon icon="mdi:map-marker" class="w-4 h-4 text-grayScale-2" />
            {{ address }}
          </p>
        </div>

        <!-- Carrossel -->
        <div class="w-full">
          <ScheduleCarousel :schedules="schedules" />
        </div>
      </div>
    </div>
  </div>
</template>
