<script setup lang="ts">
</script>

<template>
  <div class="text-lg md:text-xl font-bold">{{ $t('chapters.c5.title') }}</div>
  <div class="text-base md:text-lg font-semibold">{{ $t('chapters.c5.subtitle') }}</div>
  <div>{{ $t('chapters.c5.itemTitle') }}</div>
  <ol class="list-decimal list-outside pl-5 font-medium">
    <li>{{ $t('chapters.c5.item1') }}</li>
    <li>{{ $t('chapters.c5.item2') }}</li>
    <li>{{ $t('chapters.c5.item3') }}</li>
    <li>{{ $t('chapters.c5.item4') }}</li>
    <li>{{ $t('chapters.c5.item5') }}</li>
    <li>{{ $t('chapters.c5.item6') }}</li>
    <li>{{ $t('chapters.c5.item7') }}</li>
    <li>{{ $t('chapters.c5.item8.title') }}</li>
    <ul class="list-disc list-outside pl-6">
      <li>{{ $t('chapters.c5.item8.item1') }}</li>
      <li>{{ $t('chapters.c5.item8.item2') }}</li>
      <li>{{ $t('chapters.c5.item8.item3') }}</li>
    </ul>
  </ol>
</template>
