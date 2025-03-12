import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from './i18n/en'
import id from './i18n/id'

type I18nSchema = typeof en

const i18n = createI18n<[I18nSchema], 'en' | 'id'>({
  locale: 'id',
  fallbackLocale: 'en',
  messages: {
    en,
    id,
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
