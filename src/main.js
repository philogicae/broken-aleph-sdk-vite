import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')

import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
