<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

function handleLogout() {
  authStore.logout()
  // se quiser redirecionar para home
  window.location.href = '/'
}
</script>

<template>
  <aside class="bg-white rounded-xl shadow p-6 h-fit">
    <header class="w-full flex items-center gap-2 text-grayScale-4 font-semibold text-lg mb-4">
      <Icon icon="mdi:account-circle" class="w-7 h-7 text-grayScale-4" />
      <h2>Minha conta</h2>
    </header>

    <div class="flex justify-between items-end border-t pt-4">
      <div class="">
        <p class="font-semibold text-grayScale-4">{{ user.name }}</p>
        <p class="text-grayScale-3 text-sm">{{ user.email }}</p>
      </div>

      <button
        class="mt-4 bg-danger-0 text-danger-2 font-semibold px-6 py-2 rounded-lg hover:bg-danger-1 cursor-pointer"
        @click="handleLogout"
      >
        Sair
      </button>
    </div>
  </aside>
</template>
