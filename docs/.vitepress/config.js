import { defineConfig } from 'vitepress'
import { autoSidebar } from './sidebar.js'

export default defineConfig({
  title: '欧贝文档',
  description: '欧贝项目技术文档',
  lang: 'zh-CN',
  // 设置站点基础路径，例如部署到 https://example.com/obei/ 时设为 '/obei/'
  base: '/obei-docs/',
  themeConfig: {
    siteTitle: '欧贝文档',
    // nav: [
    //   { text: '指南', link: '/guide/' },
    //   { text: 'API 参考', link: '/api/' }
    // ],
    sidebar: autoSidebar(new URL('../', import.meta.url).pathname),
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026 欧贝团队'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
