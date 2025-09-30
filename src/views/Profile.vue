<script setup lang="ts">
import UpcomingAppointments from '@/components/profiles/UpcomingAppointments.vue'
import PastAppointments from '@/components/profiles/PastAppointments.vue'
import AccountCard from '@/components/profiles/AccountCard.vue'
</script>

<template>
  <div class="min-h-screen pt-2 pb-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <UpcomingAppointments />
        <PastAppointments />
      </div>

      <AccountCard />
    </div>
  </div>
</template>
