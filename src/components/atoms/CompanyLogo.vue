<script setup lang="ts">
defineProps<{ src: string, title?: string }>()
</script>

<template>
  <div class="size-[60px] md:size-20 rounded-lg border border-[#D6D6D6] overflow-hidden">
    <img class="size-full object-contain" :src="src" :alt="title">
  </div>
</template>
