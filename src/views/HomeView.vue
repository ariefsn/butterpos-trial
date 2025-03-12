<script setup lang="ts">
import TabContent from '@/components/atoms/TabContent.vue'
import ButtonPrevNext from '@/components/molecules/ButtonPrevNext.vue'
import InfoStart from '@/components/templates/InfoStart.vue'
import Step1 from '@/components/templates/Step1.vue'
import Step2 from '@/components/templates/Step2.vue'
import Step3 from '@/components/templates/Step3.vue'
import Step4 from '@/components/templates/Step4.vue'
import Step5 from '@/components/templates/Step5.vue'
import Step6 from '@/components/templates/Step6.vue'
import Step7 from '@/components/templates/Step7.vue'
import Step8 from '@/components/templates/Step8.vue'
import { formSchema, type FormPayload } from '@/models/form'
import { useAppStore } from '@/stores/app'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import Tabs from '../components/atoms/Tabs.vue'
import CompanyHeader from '../components/molecules/CompanyHeader.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { setStatus } = useAppStore()

const activeTab = ref(0)

const formData = ref<FormPayload | undefined>(undefined)

const tabs = computed(() => [
  {
    title: t('chapters.c0.title'),
    href: '#pendahuluan'
  },
  {
    title: t('chapters.c1.title'),
    href: '#pasal-1'
  },
  {
    title: t('chapters.c2.title'),
    href: '#pasal-2'
  },
  {
    title: t('chapters.c3.title'),
    href: '#pasal-3'
  },
  {
    title: t('chapters.c4.title'),
    href: '#pasal-4'
  },
  {
    title: t('chapters.c5.title'),
    href: '#pasal-5'
  },
  {
    title: t('chapters.c6.title'),
    href: '#pasal-6'
  },
  {
    title: t('chapters.c7.title'),
    href: '#pasal-7'
  },
  {
    title: 'Form Persetujuan',
    href: '#form-persetujuan'
  }
])

onMounted(() => {
  const hash = route.hash
  if (hash) {
    const findTab = tabs.value.findIndex(e => e.href.endsWith(hash))
    if (findTab) {
      activeTab.value = findTab
    }
  }
})

const onSubmit = async () => {
  if (!formData.value) {
    alert('Please complete the form!')
    return
  }

  const { success, data, error } = formSchema.safeParse(formData.value)
  if (!success) {
    let msg = 'Please fill all mandatory fields with valid values!'
    const errors = error.flatten().fieldErrors
    if (errors.companyInfo?.length) {
      msg = errors.companyInfo[0]
    } else if (errors.personalInfo?.length) {
      msg = errors.personalInfo[0]
    } else if (errors.bankInfo?.length) {
      msg = errors.bankInfo[0]
    } else if (errors.signature?.length) {
      msg = errors.signature[0]
    }
    alert(msg)
    return
  }

  try {
    const raw = await fetch('https://webhook.site/115b8a34-7206-4e1d-9d20-730e33ceb628', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const res = await raw.text()

    console.log(res)
    setStatus('success')
    router.replace('/success')
  } catch (error) {
    alert(error)
  }
}

const onPrevClick = () => {
  if (activeTab.value === 0) {
    return
  }

  activeTab.value--

  const tab = tabs.value[activeTab.value]
  router.push({
    hash: tab.href
  })
}

const onNextClick = () => {
  if (activeTab.value >= (tabs.value.length - 1)) {
    onSubmit()
    return
  }

  activeTab.value++

  const tab = tabs.value[activeTab.value]
  router.push({
    hash: tab.href
  })
}

const onFormChanged = (data: FormPayload) => {
  formData.value = data
}
</script>

<template>
  <div class="tabs max-w-[924px] w-full mx-auto flex flex-col gap-4">
    <CompanyHeader />

    <Tabs :items="tabs" v-model="activeTab">
      <TabContent v-if="activeTab === 0" id="pendahuluan">
        <InfoStart />
      </TabContent>
      <TabContent v-if="activeTab === 1" id="pasal-1">
        <Step1 />
      </TabContent>
      <TabContent v-if="activeTab === 2" id="pasal-2">
        <Step2 />
      </TabContent>
      <TabContent v-if="activeTab === 3" id="pasal-3">
        <Step3 />
      </TabContent>
      <TabContent v-if="activeTab === 4" id="pasal-4">
        <Step4 />
      </TabContent>
      <TabContent v-if="activeTab === 5" id="pasal-5">
        <Step5 />
      </TabContent>
      <TabContent v-if="activeTab === 6" id="pasal-6">
        <Step6 />
      </TabContent>
      <TabContent v-if="activeTab === 7" id="pasal-7">
        <Step7 />
      </TabContent>
      <TabContent v-if="activeTab === 8" id="form-persetujuan">
        <Step8 @change="onFormChanged" />
      </TabContent>
    </Tabs>

    <ButtonPrevNext :prev-hidden="activeTab === 0" :prev-title="$t('buttons.previous.title')"
      :next-title="activeTab === (tabs.length - 1) ? $t('buttons.submit.title') : $t('buttons.next.title')"
      @prev="onPrevClick" @next="onNextClick" />
  </div>
</template>
