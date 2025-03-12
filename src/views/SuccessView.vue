<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Success from '../components/templates/Success.vue'

const { status } = useAppStore()
const router = useRouter()

onMounted(() => {
  if (!status) {
    router.replace('/')
  }
})
</script>

<template>
  <Success />
</template>
