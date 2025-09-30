<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import { useAuthStore } from '@/stores/auth.ts'
import { Icon } from '@iconify/vue'

const authStore = useAuthStore()
</script>

<template>
  <header class="w-full bg-grayScale-0 mb-4">
    <div class="container flex justify-between items-center">
      <Logo />
      <LoginModal v-if="!authStore.isAuthenticated" />
      <div v-else class="flex items-center justify-end space-x-4">
        <RouterLink to="/">
          <Icon icon="mdi:search" class="w-6 h-6 text-primary-3" />
        </RouterLink>
        <RouterLink to="/profile" class="btn-secondary">Meu perfil</RouterLink>
      </div>
    </div>
  </header>
</template>
