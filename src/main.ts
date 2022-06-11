import App from '@/App.vue'
import vClickOutside from 'click-outside-vue3'
import { createApp } from 'vue'
import '~/modern-normalize/modern-normalize.css'

createApp(App).use(vClickOutside).mount('#app')
