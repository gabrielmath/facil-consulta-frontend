<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/components/icons/Logo.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import { useAuthStore } from '@/stores/auth.ts'
import { Icon } from '@iconify/vue'
import Button from '@/components/forms/Button.vue'

const authStore = useAuthStore()

const open = ref<boolean>(false)
</script>

<template>
  <header class="w-full bg-grayScale-0 mb-4">
    <div class="container flex justify-between items-center">
      <Logo />

      <Button v-if="!authStore.isAuthenticated" variant="secondary" @click="open = true">
        Entrar/Criar conta
      </Button>
      <div v-else class="flex items-center justify-end space-x-4">
        <RouterLink to="/">
          <Icon icon="mdi:search" class="w-6 h-6 text-primary-3" />
        </RouterLink>
        <RouterLink to="/profile" class="btn-secondary">Meu perfil</RouterLink>
      </div>
    </div>
  </header>
  <LoginModal :open="open" @close-modal="open = false" />
</template>
