import '@scss/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SchemeSwitcher from '@modules/scheme-switcher/SchemeSwitcher.js'

const colorScheme = SchemeSwitcher.init()
const app = createApp(App)

app.provide('colorScheme', colorScheme)
app.use(createPinia())
app.use(router)

app.mount('#app')
