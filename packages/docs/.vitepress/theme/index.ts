import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import type { App } from 'vue'

interface EnhanceApp {
  app: App
}
export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceApp) {
    app.component('demo-preview', ElementPlusContainer)
  },
}
