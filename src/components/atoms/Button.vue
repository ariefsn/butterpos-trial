<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'primary'
  disabled?: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :class="{
    'md:order-1 order-2 rounded bg-white border border-[#B2B2B2] text-[#080808] py-3 px-6 text-center w-full font-semibold cursor-pointer': true,
    'disabled:!bg-gray-500 disabled:!border-gray-500': true,
    '!bg-[#0433FF] !border !border-[#0433FF] text-white': variant === 'primary'
  }" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>
