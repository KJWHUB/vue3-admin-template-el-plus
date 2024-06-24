import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
import { i18n } from './lib/i18n'
import router from './router'

const app = createApp(App)

app.use(i18n)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')
