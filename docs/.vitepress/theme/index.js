import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import LandingPage from './LandingPage.vue'

export default {
  // 扩展默认主题
  extends: DefaultTheme,
  
  // 自定义布局
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 自定义布局插槽示例
      // 'layout-top': () => h('div', '顶部内容'),
      // 'layout-bottom': () => h('div', '底部内容'),
      // 'aside-top': () => h('div', '侧边栏顶部'),
      // 'aside-bottom': () => h('div', '侧边栏底部'),
    })
  },

  enhanceApp({ app }) {
    // 注册自定义落地页组件
    app.component('landing-page', LandingPage)
  }
}
