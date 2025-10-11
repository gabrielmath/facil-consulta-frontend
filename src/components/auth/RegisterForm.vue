<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'
import { useAuthStore } from '@/stores/auth.ts'

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const errors = ref<Record<string, string[]>>({})

const auth = useAuthStore()

const emit = defineEmits<{
  (e: 'emailExists', value: string)
  (e: 'closeModal')
}>()

async function handleRegister() {
  loading.value = true
  errorMessage.value = ''
  errors.value = {}

  try {
    await auth.register(name.value, email.value, password.value)
    emit('closeModal')
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Erro ao cadastrar'
    errors.value = err.response?.data?.errors || {}
  } finally {
    loading.value = false
  }
}

function emailExists() {
  emit('emailExists', email.value)
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="w-full">
    <!-- Inputs -->
    <div class="flex flex-col gap-4">
      <Input
        v-model="name"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        :error="errors.name?.[0]"
      />
      <Input
        v-model="email"
        type="email"
        label="E-mail"
        placeholder="exemplo@gmail.com"
        :error="errors.email?.[0]"
        @email-exists="emailExists"
      />
      <Input
        v-model="password"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        :error="errors.password?.[0]"
      />
    </div>

    <!-- Footer -->
    <div class="flex flex-col w-full pt-8 pb-4">
      <!-- Botão Entrar -->
      <Button type="submit" class="w-full mb-4" :disabled="loading" size="big">
        {{ loading ? 'Criando...' : 'Criar conta' }}
      </Button>
    </div>
  </form>
</template>

<style scoped></style>
