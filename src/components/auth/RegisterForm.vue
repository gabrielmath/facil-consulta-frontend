<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'
import { useAuthStore } from '@/stores/auth.ts'

const open = ref(false)
const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const auth = useAuthStore()

async function handleLogin() {
  loading.value = true
  errorMessage.value = ''
  try {
    await auth.login(email.value, password.value)
    open.value = false // fecha modal
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Erro ao entrar'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Inputs -->
    <div class="flex flex-col gap-4">
      <Input v-model="name" label="E-mail" placeholder="Digite seu nome completo" />
      <Input v-model="email" type="email" label="E-mail" placeholder="exemplo@gmail.com" />
      <Input v-model="password" label="Senha" placeholder="Digite sua senha" type="password" />
      <p v-if="errorMessage" class="text-danger-2 text-sm">{{ errorMessage }}</p>
    </div>

    <!-- Footer -->
    <div class="flex flex-col w-full pt-8 pb-4">
      <!-- Botão Entrar -->
      <Button class="w-full mb-4" :disabled="loading" @click="handleLogin" size="big">
        {{ loading ? 'Criando...' : 'Criar conta' }}
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
