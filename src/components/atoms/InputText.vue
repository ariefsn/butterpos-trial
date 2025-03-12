<script setup lang="ts">
import { computed } from 'vue'

const model = defineModel()

const props = defineProps<{
  label: string
  placeholder: string
  hint?: string
  required?: boolean
  error?: string
  disabled?: boolean
}>()

const id = computed(() => props.label.toLowerCase().replace(' ', '-'))
</script>

<template>
  <div>
    <!-- font-medium block after:content-['*'] after:text-[#E21717] mb-2 -->
    <label :for="id" :class="{
      'font-medium block mb-2': true,
      'after:text-[#E21717]': required,
      'after:content-[\'*\']': required,
    }">
      {{ label }}
      <span v-if="hint" class="text-[#989898]">{{ hint }}</span>
    </label>

    <div class="relative">
      <input type="text" :id="id" :placeholder="placeholder" v-model="model" :disabled="disabled"
        class="w-full block rounded border border-[#D6D6D6] disabled:bg-[#EDEDED] outline-none p-3 placeholder:text-[#989898]">

      <div v-if="$slots.suffix" class="absolute top-1/2 -translate-y-1/2 right-3">
        <slot name="suffix" />
      </div>
    </div>

    <div v-if="error" class="mt-2 text-[#E21717] text-xs md:text-sm">{{ error }}</div>

  </div>

</template>
