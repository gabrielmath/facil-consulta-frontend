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
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-xl mx-4 flex flex-col">
      <header class="px-6 py-4 border-b border-grayScale-1 flex justify-between items-center">
        <h2>
          {{ title }}
        </h2>
        <button
          @click="$emit('close')"
          class="text-grayScale-3 hover:text-grayScale-4 text-xl cursor-pointer"
        >
          &times;
        </button>
      </header>

      <section class="px-6 py-6 text-grayScale-3 font-inter text-base flex-1">
        <slot />
      </section>
    </div>
  </div>
</template>
