import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h('div', { class: 'custom-nav' }),
    })
  },
  enhanceApp({ app }) {
    // Register custom components if needed
  }
}