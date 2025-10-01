<script setup lang="ts">
import UpcomingAppointments from '@/components/profiles/UpcomingAppointments.vue'
import PastAppointments from '@/components/profiles/PastAppointments.vue'
import AccountCard from '@/components/profiles/AccountCard.vue'
</script>

<template>
  <div class="min-h-screen pt-2 pb-10">
    <div class="container -mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Card da conta -->
      <div class="order-1 lg:order-2">
        <AccountCard />
      </div>

      <!-- Agendamentos -->
      <div class="order-2 lg:order-1 lg:col-span-2 space-y-6">
        <UpcomingAppointments />
        <PastAppointments />
      </div>
    </div>
  </div>
</template>
