<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
</script>

<template>
  <header class="w-full bg-grayScale-0 mb-4">
    <div class="container flex justify-between items-center">
      <Logo />
      <LoginModal />
    </div>
  </header>
</template>
