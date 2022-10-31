import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next'

createApp(App).use(router).use(TDesign).mount('#app')
