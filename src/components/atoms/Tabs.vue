<script setup lang="ts">
import type { TabItem } from '@/models/tab'

const model = defineModel({
  type: Number,
  default: 0
})

defineProps<{
  items: TabItem[]
}>()

const onChange = (index: number) => {
  model.value = index
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="relative rounded-lg border border-[#EDEDED] overflow-hidden">
      <div class="tab-links flex items-center justify-start gap-2 md:gap-4 bg-white p-3 rounded-lg overflow-x-auto">
        <div
          class="absolute md:hidden right-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-l from-white to-white/0">
        </div>
        <div
          class="absolute md:hidden left-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-r from-white to-white/0">
        </div>

        <a v-for="(item, index) in items" :key="item.title" :href="item.href" :onclick="() => onChange(index)" :class="{
          'whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded': true,
          'active': model === index
        }">{{ item.title }}</a>
      </div>
    </div>

    <slot />
  </div>
</template>
