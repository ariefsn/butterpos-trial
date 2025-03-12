<script setup lang="ts">
import { type FooterLink } from '../../models/link'
import Logo from '../atoms/Logo.vue'

const { links } = defineProps<{
  links: FooterLink[]
}>()

</script>

<template>
  <footer class="w-full border-t border-[#EDEDED] pt-4 pb-5 md:py-6">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between mx-auto max-w-7xl px-4 lg:px-16">
      <div class="flex items-center gap-2">
        <Logo class="!size-9 !object-contain" />
        <div class="text-sm text-[#525252]">©2024 Butter POS. All rights reserved</div>
      </div>
      <div class="flex items-center gap-6">
        <a v-for="link in links" :key="link.title" :href="link.href">
          <img class="size-5" :src="link.imageSrc" :alt="link.title">
        </a>
      </div>
    </div>
  </footer>
</template>
