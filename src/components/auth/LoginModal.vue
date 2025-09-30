<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/layouts/Modal.vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'

const open = ref(false)
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
  <Button variant="secondary" @click="open = true"> Entrar/Criar conta</Button>

  <Modal :show="open" title="Entre na sua conta" @close="open = false">
    <!-- Inputs -->
    <div class="flex flex-col gap-4">
      <Input v-model="email" label="E-mail" placeholder="exemplo@gmail.com" />
      <Input v-model="password" label="Senha" placeholder="Digite sua senha" type="password" />
      <p v-if="errorMessage" class="text-danger-2 text-sm">{{ errorMessage }}</p>
    </div>

    <!-- Footer -->
    <template #footer>
      <div class="flex flex-col w-full">
        <!-- Botão Entrar -->
        <Button class="w-full mb-4" :disabled="loading" @click="handleLogin">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </Button>

        <!-- Link criar conta -->
        <p class="text-grayScale-3 text-center">
          Não tem uma conta?
          <a href="#" class="text-primary-2 font-semibold hover:underline"> Criar uma conta </a>
        </p>
      </div>
    </template>
  </Modal>
</template>
