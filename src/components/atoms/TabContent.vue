<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <section :id="id"
    class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
    <slot />
  </section>
</template>
