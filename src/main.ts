import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/dist/reset.css'
import 'tdesign-vue-next/es/style/index.css'
import { createPinia } from 'pinia'

createApp(App).use(router).use(TDesign).use(createPinia()).mount('#app')
