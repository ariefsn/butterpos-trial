<script setup lang="ts">
defineProps < {
  required?: boolean
} > ()
</script>

<template>
  <div :class="{
    'text-lg md:text-xl font-bold mb-3': true,
    'after:content-[\'*\'] after:text-[#E21717]': required
  }">
    <slot />
  </div>
</template>
