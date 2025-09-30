<script setup lang="ts">
defineProps<{
  show: boolean
  title: string
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 flex flex-col">
      <!-- Header -->
      <header class="px-6 py-4 border-b border-grayScale-1 flex justify-between items-center">
        <h2>
          {{ title }}
        </h2>
        <button @click="$emit('close')" class="text-grayScale-3 hover:text-grayScale-4 text-xl">
          &times;
        </button>
      </header>

      <!-- Conteúdo -->
      <section class="px-6 py-6 text-grayScale-3 font-inter text-base flex-1">
        <slot />
      </section>

      <!-- Footer -->
      <footer
        class="px-6 py-4 border-t border-grayScale-1 flex justify-between items-center text-sm"
      >
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>
