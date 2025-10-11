<script setup lang="ts">
import { ref, defineProps, watch, onMounted, defineEmits } from 'vue'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const show = ref<boolean>(false)
const formCreate = ref<boolean>(false)
const emailExists = ref<string>('')

interface Props {
  open: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
})

const emit = defineEmits<{
  (e: 'closeModal')
}>()

onMounted(() => {
  show.value = props.open
})

watch(
  () => props.open,
  (value) => {
    show.value = value
  },
)

function hasEmail(email) {
  emailExists.value = email
  formCreate.value = false
}

function closeModal() {
  show.value = false
  emit('closeModal')
}
</script>

<template>
  <Modal
    :show="show"
    :title="formCreate ? 'Crie sua conta' : 'Entre na sua conta'"
    @close="closeModal"
  >
    <RegisterForm v-if="formCreate" @email-exists="hasEmail" @close-modal="closeModal" />
    <AuthForm v-else :email-exists="emailExists" @close-modal="closeModal" />

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
