<script setup lang="ts">
import LanguageSwitcher from '../atoms/LanguageSwitcher.vue'
import Logo from '../atoms/Logo.vue'
</script>

<template>
  <header class="w-full border-b border-[#EDEDED] bg-white">
    <div class="flex w-full items-center justify-between mx-auto max-w-7xl py-4 px-4 lg:px-16">
      <Logo />
      <LanguageSwitcher />
    </div>
  </header>
</template>
