<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'
import { useAuthStore } from '@/stores/auth.ts'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const errors = ref<Record<string, string[]>>({})

const auth = useAuthStore()

interface Props {
  emailExists: string
}

const props = withDefaults(defineProps<Props>(), {
  emailExists: '',
})

onMounted(() => {
  email.value = props.emailExists
})

watch(
  () => props.emailExists,
  (value) => {
    email.value = value
  },
)

async function handleLogin() {
  loading.value = true
  errorMessage.value = ''
  errors.value = {}

  try {
    await auth.login(email.value, password.value)
    open.value = false // fecha modal
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Erro ao entrar'
    errors.value = err.response?.data?.errors || {}
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="w-full">
    <!-- Inputs -->
    <div class="flex flex-col gap-4">
      <Input
        v-model="email"
        label="E-mail"
        placeholder="exemplo@gmail.com"
        :error="errors.email?.[0]"
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
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </Button>
    </div>
  </form>
</template>

<style scoped></style>
