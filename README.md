# 欧贝文档

基于 VitePress 1.6.4 构建的欧贝项目技术文档站点。

## 快速开始

### 环境要求

- Node.js 18.0+
- npm / yarn / pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看文档站点。

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 项目结构

```
vitePressDemo/
├── docs/                    # 文档目录
│   ├── .vitepress/          # VitePress 配置
│   │   └── config.js        # 站点配置文件
│   ├── public/              # 静态资源
│   │   └── logo.svg         # 站点 Logo
│   ├── guide/               # 指南文档
│   │   ├── index.md             # 介绍
│   │   ├── getting-started.md   # 快速开始
│   │   └── configuration.md     # 配置说明
│   ├── api/                 # API 文档
│   │   └── index.md             # API 概述
│   └── index.md             # 首页
├── package.json             # 项目配置
└── .gitignore               # Git 忽略配置
```

## 技术栈

- [VitePress 1.6.4](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://markdown.com.cn/) - 文档编写

## 功能特性

- 📝 Markdown 编写文档
- 🎨 简洁美观的默认主题
- 🌙 支持深色模式
- 🔍 本地全文搜索
- 📱 响应式布局
- 🚀 极速的页面加载

## 许可证

[MIT](LICENSE)

---

Copyright © 2026 欧贝团队
