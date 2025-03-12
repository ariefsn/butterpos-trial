<script setup lang="ts">
import { computed } from 'vue'

const model = defineModel()

const props = defineProps<{
  label: string
  placeholder: string
}>()

const id = computed(() => props.label.toLowerCase().replace(' ', '-'))
</script>

<template>
  <div>
    <label :for="id" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nomor WhatsApp
    </label>
    <div class="relative">
      <div
        class="absolute top-0 left-0 flex items-center gap-2 bg-[#F8F8F8] py-2.5 px-3 md:p-3 border border-[#D6D6D6] rounded-l">
        <img class="size-6" src="/img/svg/flag-indonesia.svg" alt="Flag indonesia">
        <svg class="size-4 text-[#525252]" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
        </svg>
      </div>
      <div class="absolute text-sm md:text-base text-[#525252] font-medium left-[84px] top-1/2 -translate-y-1/2">
        +62</div>
      <input type="number" :id="id" :placeholder="placeholder" v-model="model"
        class="w-full block rounded border border-[#D6D6D6] outline-none py-3 pr-3 pl-[119px] md:pl-[123px] placeholder:text-[#989898]">
    </div>
  </div>
</template>
