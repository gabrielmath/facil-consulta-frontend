<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

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
    <!--    <AuthForm />-->
    <RegisterForm />
    <!--    <div class="flex flex-col gap-4">
          <Input v-model="email" label="E-mail" placeholder="exemplo@gmail.com" />
          <Input v-model="password" label="Senha" placeholder="Digite sua senha" type="password" />
          <p v-if="errorMessage" class="text-danger-2 text-sm">{{ errorMessage }}</p>
        </div>

        <div class="flex flex-col w-full pt-8 pb-4">
          <Button class="w-full mb-4" :disabled="loading" @click="handleLogin" size="big">
            {{ loading ? 'Entrando...' : 'Entrar' }}
          </Button>
        </div>-->

    <!-- Link criar conta -->
    <p
      class="flex justify-center items-center space-x-2 text-grayScale-3 pt-6 text-center border-t border-t-grayScale-1"
    >
      <span>Não tem uma conta?</span>
      <Button variant="secondary"> Criar uma conta</Button>
    </p>
  </Modal>
</template>
