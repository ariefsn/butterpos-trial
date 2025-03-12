<script setup lang="ts">
import CompanyLogo from '../atoms/CompanyLogo.vue'
import Note from '../atoms/Note.vue'
import Title from '../atoms/Title.vue'
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-start md:items-center gap-5 p-4 md:p-5 rounded-lg border border-[#EDEDED] bg-white">
    <CompanyLogo src="/img/sinamon-logo.svg" title="Sinamon logo" />
    <div>
      <Title>
        PT Sinamon Group Indonesia
      </Title>
      <div class="flex items-start md:items-center gap-2">
        <svg class="size-5 text-[#989898]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
        </svg>
        <Note>
          Jakarta Timur, Indonesia · sinamon.indonesia@gmail.com
        </Note>
      </div>
    </div>
  </div>
</template>
