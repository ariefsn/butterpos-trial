<script setup lang="ts">
import type { FormPayload } from '@/models/form'
import { ref, watch } from 'vue'
import type { DropdownItem } from '../../models/dropdown'
import Dropdown from '../atoms/Dropdown.vue'
import InputFile from '../atoms/InputFile.vue'
import InputPhone from '../atoms/InputPhone.vue'
import InputText from '../atoms/InputText.vue'
import SignaturePad from '../atoms/SignPad.vue'
import Subtitle from '../atoms/Subtitle.vue'

const emits = defineEmits<{
  (e: 'change', data: FormPayload): void
}>()

const bankItems: DropdownItem[] = [
  {
    value: 'bsi',
    label: 'Bank Syariah Indonesia'
  },
  {
    value: 'bri',
    label: 'Bank Rakyat Indonesia'
  },
  {
    value: 'btn',
    label: 'Bank Tabungan Negara'
  },
  {
    value: 'bca',
    label: 'Bank Central Asia'
  },
  {
    value: 'cimb',
    label: 'Bank CIMB Niaga',
  },
  {
    value: 'mandiri',
    label: 'Bank Mandiri'
  }
]

const emptyData: FormPayload = {
  personalInfo: {
    name: '',
    identity: undefined,
    identityImage: '',
    tax: undefined,
    taxImage: '',
    phone: undefined
  },
  companyInfo: {
    name: '',
    pic: '',
    email: ''
  },
  bankInfo: {
    name: '',
    accountName: '',
    accountNumber: undefined
  },
  signature: ''
}

const data = ref<FormPayload>(emptyData)

const onValidateBankAccount = () => {
  data.value.bankInfo.accountName = ''
  setTimeout(() => {
    data.value.bankInfo.accountName = 'John Doe'
  }, 800)
}

const onSign = (image: string) => {
  data.value.personalInfo.identityImage = image
  data.value.personalInfo.taxImage = image
  data.value.signature = image
}

watch(data, () => {
  emits('change', data.value)
}, {
  deep: true
})
</script>

<template>
  <form
    class="flex flex-col text-sm md:text-base gap-6 md:gap-10 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
    <div>
      <div class="text-lg md:text-xl font-bold mb-3">{{ $t('form.personalInfo.title') }}</div>
      <div class="space-y-4">
        <InputText :label="$t('form.personalInfo.name.label')" :placeholder="$t('form.personalInfo.name.placeholder')"
          required v-model="data.personalInfo.name" />
        <InputText :label="$t('form.personalInfo.identity.label')"
          :placeholder="$t('form.personalInfo.identity.placeholder')" required
          v-model.number="data.personalInfo.identity" />
        <InputFile :label="$t('form.personalInfo.uploadIdentity.label')"
          :placeholder="$t('form.personalInfo.uploadIdentity.placeholder')" />
        <InputText :label="$t('form.personalInfo.tax.label')" :placeholder="$t('form.personalInfo.tax.placeholder')"
          required v-model.number="data.personalInfo.tax" />
        <InputFile :label="$t('form.personalInfo.uploadTax.label')"
          :placeholder="$t('form.personalInfo.uploadTax.placeholder')" />
        <InputPhone :label="$t('form.personalInfo.whatsapp.label')"
          :placeholder="$t('form.personalInfo.whatsapp.placeholder')" v-model.number="data.personalInfo.phone" />
      </div>
    </div>
    <div>
      <Subtitle>
        {{ $t('form.companyInfo.title') }}
      </Subtitle>
      <div class="space-y-4">
        <InputText v-model="data.companyInfo.name" :label="$t('form.companyInfo.name.label')"
          :placeholder="$t('form.companyInfo.name.placeholder')" :hint="$t('form.companyInfo.name.hint')" />
        <InputText v-model="data.companyInfo.pic" :label="$t('form.companyInfo.pic.label')"
          :placeholder="$t('form.companyInfo.pic.placeholder')" required />
        <InputText v-model="data.companyInfo.email" :label="$t('form.companyInfo.email.label')"
          :placeholder="$t('form.companyInfo.email.placeholder')" :hint="$t('form.companyInfo.email.hint')" />
      </div>
    </div>
    <div>
      <Subtitle>{{ $t('form.bankInfo.title') }}</Subtitle>
      <div class="space-y-4">
        <Dropdown v-model="data.bankInfo.name" :label="$t('form.bankInfo.name.label')" required
          :placeholder="$t('form.bankInfo.name.placeholder')" :items="bankItems" />
        <InputText v-model.number="data.bankInfo.accountNumber" :label="$t('form.bankInfo.accountNumber.label')"
          :placeholder="$t('form.bankInfo.accountNumber.placeholder')" required
          :error="!data.bankInfo.accountNumber ? $t('form.bankInfo.accountNumber.errors.notFound') : undefined">
          <template #suffix>
            <div @click="onValidateBankAccount" class="cursor-pointer text-[#0023BD] text-sm font-semibold">{{
              $t('form.bankInfo.accountNumber.suffix') }}</div>
          </template>
        </InputText>
        <InputText v-model="data.bankInfo.accountName" :label="$t('form.bankInfo.accountName.label')" placeholder="-"
          required disabled />
      </div>
    </div>
  </form>
  <div class="mt-4 bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
    <Subtitle required>{{ $t('form.signature.title') }}</Subtitle>
    <SignaturePad :placeholder="$t('form.signature.placeholder')" @change="onSign" />
  </div>

</template>
