<script setup lang="ts">
import { computed } from 'vue'
import Button from '../atoms/Button.vue'

const props = defineProps({
  prevTitle: {
    type: String,
    required: true
  },
  nextTitle: {
    type: String,
    required: true
  },
  prevHidden: {
    type: Boolean,
    default: undefined
  },
  nextHidden: {
    type: Boolean,
    default: undefined
  }
})

defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()

const isPrevVisible = computed(() => props.prevHidden !== true)
const isNextVisible = computed(() => props.nextHidden !== true)
</script>

<template>
  <div class="flex items-center flex-col md:flex-row gap-3 md:gap-4">
    <Button v-if="isPrevVisible" variant="default" @click="$emit('prev')">
      {{ prevTitle }}
    </Button>
    <Button v-if="isNextVisible" variant="primary" @click="$emit('next')">
      {{ nextTitle }}
    </Button>
  </div>
</template>
