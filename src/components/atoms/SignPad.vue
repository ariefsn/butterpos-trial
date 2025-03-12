<script setup lang="ts">
import type { Signature } from '@selemondev/vue3-signature-pad'
import { VueSignaturePad } from '@selemondev/vue3-signature-pad'
import { ref } from 'vue'
import Button from './Button.vue'

defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  (e: 'change', data: string): void
}>()

const signature = ref<Signature>()
const signatureData = ref('')
const isShowPad = ref(false)
const isCompleted = ref(false)

const onDrawingStarted = () => {
  console.log('started')
  isCompleted.value = false
}

const onDrawingFinished = () => {
  console.log('finished')
  isCompleted.value = true
}

const onClear = () => {
  signature.value?.clearCanvas()
  isCompleted.value = false
}

const onClosePad = () => {
  isShowPad.value = false
  onClear()
}

const onCreateSignature = () => {
  const data = signature.value?.saveSignature()
  signatureData.value = data ?? ''
  isShowPad.value = false
  if (data) {
    emits('change', data)
  }
  onClear()
}
</script>

<template>
  <div>
    <button data-modal-target="signage_modal" :onclick="() => isShowPad = !isShowPad"
      class="cursor-pointer w-full flex items-center justify-center gap-2 h-[164px] bg-[#F4F6FF] border border-dashed border-[#0433FF] rounded-lg">
      <img class="size-5" src="/img/svg/edit.svg" alt="Edit icon">
      <div class="text-sm font-medium text-[#525252]">{{ placeholder }}</div>
    </button>
    <div v-if="signatureData"
      class="mt-3 relative cursor-pointer flex items-center justify-center gap-2 h-[164px] border border-dashed border-[#0433FF] rounded-lg">
      <img class="w-36 h-full max-h-[108px] object-contain" :src="signatureData" alt="Signage">
      <div class="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-4">
        <button @click="isShowPad = true" class="flex items-center gap-2 cursor-pointer">
          <img class="size-5" src="/img/svg/edit-2.svg" alt="Edit icon">
          <div class="text-sm font-medium text-[#525252]">Edit</div>
        </button>
        <button @click="signatureData = ''">
          <svg class="cursor-pointer size-5 text-[#CA0A0A]" data-slot="icon" fill="none" stroke-width="2"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">
            </path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Buat Tanda Tangan modal -->
    <div id="signage_modal"
      :class="'fixed modal top-0 left-0 w-screen h-screen bg-[#080808]/40 flex items-end md:items-center justify-center md:p-6 ' + (!isShowPad ? 'hidden' : '')">
      <div class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]">
        <div class="flex items-center justify-between mb-5">
          <div class="text-lg md:text-xl font-semibold text-[#080808]">Buat Tanda Tangan</div>
          <button class="modal-close cursor-pointer size-5 md:size-6" :onclick="onClosePad">
            <svg class="size-6 text-[#525252]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="mb-6 flex justify-center">
          <!-- <div
            class="bg-[#F8F8F8] text-[#989898] border border-[#EDEDED] h-[220px] flex items-center justify-center rounded-lg">
            Gambar tanda tangan di sini</div> -->
          <div
            class="bg-[#F8F8F8] border border-[#EDEDED] h-[220px] w-[400px] pt-5 md:pt-0 flex items-start md:items-center justify-center rounded-lg relative">
            <VueSignaturePad ref="signature" height="220px" width="400px" :maxWidth="2" :minWidth="2" :disabled="false"
              :options="{
                penColor: 'black', backgroundColor: 'white'
              }" @begin-stroke="onDrawingStarted" @end-stroke="onDrawingFinished" />
            <button @click="onClear"
              class="absolute bottom-6 right-6 text-sm font-semibold text-[#CA0A0A]">Hapus</button>
          </div>
        </div>
        <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3">
          <Button @click="onClosePad" class="order-2 md:order-1 modal-close">
            Batal
          </Button>
          <Button @click="onCreateSignature" variant="primary" :disabled="!isCompleted" class="order-1 md:order-2">
            Buat Tanda Tangan
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
