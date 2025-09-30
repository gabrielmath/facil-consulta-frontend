<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'big'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'default',
  disabled: false,
  type: 'button',
})

// classes base
const baseClasses =
  'inline-flex items-center justify-center font-sans font-semibold rounded transition-colors cursor-pointer duration-200'

// tamanhos
const sizeClasses = computed(() => {
  return props.size === 'big' ? 'px-6 py-3 text-[16px]' : 'px-4 py-2 text-[14px]'
})

// variantes de cor
const variantClasses = computed(() => {
  if (props.variant === 'primary') {
    return props.disabled
      ? 'bg-grayScale-0 text-grayScale-2 cursor-not-allowed border border-grayScale-1 rounded'
      : 'bg-primary-2 text-grayScale-0 hover:bg-primary-3 active:bg-primary-3'
  }

  if (props.variant === 'secondary') {
    return props.disabled
      ? 'bg-grayScale-0 text-grayScale-2 cursor-not-allowed border border-grayScale-1 rounded'
      : 'bg-primary-1 text-primary-2 hover:bg-primary-0 active:border active:border-primary-2'
  }

  return ''
})
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="[baseClasses, sizeClasses, variantClasses]"
  >
    <slot />
  </button>
</template>
