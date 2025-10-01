<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const open = ref(false)
const formCreate = ref<boolean>(false)
const emailExists = ref<string>('')

function hasEmail(email) {
  emailExists.value = email
  formCreate.value = false
}
</script>

<template>
  <Button variant="secondary" @click="open = true"> Entrar/Criar conta</Button>

  <Modal
    :show="open"
    :title="formCreate ? 'Crie sua conta' : 'Entre na sua conta'"
    @close="open = false"
  >
    <RegisterForm v-if="formCreate" @email-exists="hasEmail" />
    <AuthForm v-else :email-exists="emailExists" />

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
