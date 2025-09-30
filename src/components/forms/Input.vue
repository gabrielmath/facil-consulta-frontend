<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  id: string
  label: string
  type?: string
  placeholder?: string
  modelValue?: string
  error?: string // mensagem de erro opcional
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isFocused = ref(false)

const hasValue = computed(() => props.modelValue?.length > 0)

const inputClasses = computed(() => {
  if (props.error) {
    return 'border-danger-2 focus:border-danger-2'
  }
  if (isFocused.value) {
    return 'border-primary-2 ring-2 ring-primary-0'
  }
  if (hasValue.value) {
    return 'border-primary-2'
  }
  return 'border-grayScale-2'
})
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="id" class="text-sm font-sans text-grayScale-4">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="[
        'w-full rounded px-3 py-4 font-sans text-grayScale-4 placeholder-grayScale-2 outline-none transition-all duration-200',
        'border',
        inputClasses,
      ]"
    />

    <p v-if="error" class="text-danger-2 text-xs font-sans">
      {{ error }}
    </p>
  </div>
</template>
