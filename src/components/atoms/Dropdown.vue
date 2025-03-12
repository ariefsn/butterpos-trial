<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DropdownItem } from '../../models/dropdown'

const model = defineModel()

const props = defineProps<{
  label: string
  placeholder: string
  hint?: string
  required?: boolean
  error?: string
  items: DropdownItem[]
}>()

const id = computed(() => props.label.toLowerCase().replace(' ', '-'))

const isShow = ref(false)
const search = ref('')

const itemsFiltered = computed(() => {
  if (!search.value) {
    return props.items
  }

  return props.items.filter(e => [e.label.toLowerCase(), e.value.toLowerCase()].join('-').includes(search.value.toLowerCase()))
})

const onChange = (value: string) => {
  model.value = value
  isShow.value = false
}

const selected = computed(() => props.items.find(e => e.value === model.value))

watch(isShow, () => {
  if (!isShow.value) {
    search.value = ''
  }
})
</script>

<template>
  <div>
    <label :for="id" :class="{
      'font-medium block mb-2': true,
      'after:text-[#E21717]': required,
      'after:content-[\'*\']': required,
    }">
      {{ label }}
    </label>
    <div class="relative dropdown">
      <div
        class="cursor-pointer dropdown-toggle flex items-center justify-between gap-2 w-full rounded border border-[#D6D6D6] outline-none p-3"
        @click="isShow = !isShow">
        <div class="dropdown-text">{{ selected?.label || 'Please Select' }}</div>
        <svg :class="{
          'size-6 duration-300': true,
          'rotate-180': isShow
        }" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
        </svg>
      </div>
      <div v-if="isShow"
        class="absolute dropdown-menu top-[calc(100%+8px)] left-0 pt-4 px-4 w-full border border-[#EDEDED] rounded overflow-hidden bg-white z-20 shadow-[0_2px_5px_0px_rgba(8,8,8,0.04),0_10px_10px_0px_rgba(8,8,8,0.03),0_22px_13px_0_rgba(8,8,8,0.02),0_40px_16px_0_rgba(8,8,8,0.01),0_62px_17px_0_rgba(8,8,8,0)]">
        <div class="relative mb-2">
          <svg class="absolute top-1/2 -translate-y-1/2 left-3 size-4 text-[#989898]" data-slot="icon" fill="none"
            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          <input type="text" placeholder="Search" v-model="search"
            class="w-full text-sm block rounded border border-[#D6D6D6] outline-none pl-9 pr-3 py-2 bg-white placeholder:text-[#989898]">
        </div>
        <div class="-mx-4 max-h-[216px] overflow-y-auto">
          <div v-for="item in itemsFiltered" :key="item.value" @click="() => onChange(item.value)"
            class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
