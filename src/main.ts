import ToastManager from '@/utils/toastUtil/ToastManager'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

uni.$toast = ToastManager

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
