<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import Input from '@/components/forms/Input.vue'

const open = ref<boolean>()

defineProps<{
  show: {
    type: boolean
    default: false
  }
}>()
</script>

<template>
  <Modal :show="open" title="Entre na sua conta" @close="open = false">
    <!-- Inputs -->
    <div class="flex flex-col gap-4">
      <Input label="E-mail" placeholder="exemplo@gmail.com" />
      <Input label="Senha" placeholder="Digite sua senha" type="password" />
    </div>

    <!-- Footer -->
    <template #footer>
      <div class="flex flex-col w-full">
        <!-- Botão Entrar -->
        <Button class="w-full mb-4">Entrar</Button>

        <!-- Link criar conta -->
        <p class="text-grayScale-3 text-center">
          Não tem uma conta?
          <a href="#" class="text-primary-2 font-semibold hover:underline">Criar uma conta</a>
        </p>
      </div>
    </template>
  </Modal>
</template>
