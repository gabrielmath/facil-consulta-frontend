<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const open = ref(false)
const formCreate = ref<boolean>(false)
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

  <Modal
    :show="open"
    :title="formCreate ? 'Crie sua conta' : 'Entre na sua conta'"
    @close="open = false"
  >
    <RegisterForm v-if="formCreate" />
    <AuthForm v-else />

    <p
      v-if="formCreate"
      class="flex justify-center items-center space-x-2 text-grayScale-3 pt-6 text-center border-t border-t-grayScale-1"
    >
      <span>Já tem uma conta?</span>
      <Button variant="secondary" @click="formCreate = false"> Entrar na conta</Button>
    </p>
    <p
      v-else
      class="flex justify-center items-center space-x-2 text-grayScale-3 pt-6 text-center border-t border-t-grayScale-1"
    >
      <span>Não tem uma conta?</span>
      <Button variant="secondary" @click="formCreate = true"> Criar uma conta</Button>
    </p>
  </Modal>
</template>
