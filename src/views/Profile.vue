<script setup lang="ts">
import UpcomingAppointments from '@/components/profiles/UpcomingAppointments.vue'
import PastAppointments from '@/components/profiles/PastAppointments.vue'
import AccountCard from '@/components/profiles/AccountCard.vue'

const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Marcos Eduardo Avancini Schenatto',
    specialty: 'Cardiologista',
    address: 'Rua Marechal Deodoro, 755, sala 104, Pelotas',
    date: '19/03/2025',
    time: '13:00',
  },
]

const pastAppointments = [
  {
    id: 1,
    doctor: 'Dr. Fernando Behrensdorf',
    specialty: 'Cardiologista',
    address: 'Parque Una, Av Dona Zilda, 100, sala 602, Pelotas',
    date: '02/11/2024',
    time: '09:00',
  },
  {
    id: 2,
    doctor: 'Dr. Fernando Behrensdorf',
    specialty: 'Cardiologista',
    address: 'Parque Una, Av Dona Zilda, 100, sala 602, Pelotas',
    date: '02/10/2024',
    time: '09:00',
  },
]
</script>

<template>
  <div class="min-h-screen pt-2 pb-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Coluna esquerda -->
      <div class="lg:col-span-2 space-y-6">
        <UpcomingAppointments :appointments="upcomingAppointments" />
        <PastAppointments :appointments="pastAppointments" />
      </div>

      <!-- Coluna direita -->
      <AccountCard />
    </div>
  </div>
</template>
