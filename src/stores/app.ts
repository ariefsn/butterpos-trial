import { defineStore } from 'pinia'
import { ref } from 'vue'

type Status = 'success' | 'error'

export const useAppStore = defineStore('app', () => {
  const status = ref<Status | undefined>(undefined)

  function setStatus(stats?: Status) {
    status.value = stats
  }

  return { status, setStatus }
})
