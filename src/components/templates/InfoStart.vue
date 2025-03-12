<script setup lang="ts">
</script>

<template>
  <div class="text-lg md:text-xl font-bold">{{ $t('chapters.c0.title') }}</div>
  <div>{{ $t('chapters.c0.subtitle') }}</div>
  <ol class="list-decimal list-outside pl-5 [&>li::marker]:font-bold">
    <li>
      <i18n-t keypath="chapters.c0.item1">
        <template #company>
          <span class="font-bold">PT Manhattan Slice Indonesia</span>
        </template>
      </i18n-t>
    </li>
    <li>
      <i18n-t keypath="chapters.c0.item2">
        <template #vendor>
          <span class="font-bold">[Nama Vendor / Perusahaan Vendor]</span>
        </template>
      </i18n-t>
    </li>
  </ol>
  <div>{{ $t('chapters.c0.item3') }}</div>
  <div>
    <i18n-t keypath="chapters.c0.item4">
      <template #people>
        <span class="font-bold">{{ $t('chapters.c0.people') }}</span>
      </template>
    </i18n-t>
  </div>
</template>
