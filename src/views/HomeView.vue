<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import DoctorCard from '@/components/DoctorCard.vue'
</script>

<template>
  <main>
    <!--    <TheWelcome />-->
    <div class="flex flex-col space-y-4">
      <DoctorCard
        name="Dr. Marcos Eduardo Avancini Schenatto"
        specialty="Cardiologista"
        address="Rua Marechal Deodoro, 755, sala 104, Pelotas"
        :schedules="{
          '2025-09-30': [
            { id: 1, time: '15:00' },
            { id: 2, time: '16:00' },
            { id: 3, time: '17:00' },
          ],
          '2025-10-01': [
            { id: 4, time: '13:00' },
            { id: 5, time: '14:00' },
            { id: 6, time: '15:00' },
            { id: 7, time: '16:00' },
            { id: 8, time: '16:30' },
          ],
        }"
      />
    </div>
  </main>
</template>
