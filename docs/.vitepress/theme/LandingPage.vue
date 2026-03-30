<template>
  <div class="landing-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">欧贝</span>
          文档中心
        </h1>
        <p class="hero-description">
          企业级技术文档平台，提供简洁、高效、可靠的解决方案
        </p>
        <div class="hero-actions">
          <a href="/obei-docs/指南目录/01-介绍" class="btn btn-primary">开始阅读</a>
          <!-- <a href="https://github.com/your-org/obei" class="btn btn-secondary" target="_blank">
            GitHub
          </a> -->
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-illustration">
          <span class="icon">📚</span>
        </div>
      </div>
    </section>

    <!-- 特性卡片 -->
    <section class="features">
      <h2 class="section-title">核心特性</h2>
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 快速导航 -->
    <section class="quick-nav">
      <h2 class="section-title">快速导航</h2>
      <div class="nav-grid">
        <a v-for="nav in quickNavs" :key="nav.title" :href="nav.link" class="nav-card">
          <span class="nav-icon">{{ nav.icon }}</span>
          <div class="nav-info">
            <h3>{{ nav.title }}</h3>
            <p>{{ nav.desc }}</p>
          </div>
          <span class="nav-arrow">→</span>
        </a>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="landing-footer">
      <p>© 2026 欧贝团队 | 基于 MIT 许可发布</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  { icon: '🚀', title: '极速性能', desc: '基于现代化构建工具，提供闪电般的页面加载速度' },
  { icon: '🎨', title: '简洁美观', desc: '精美的文档主题，支持自定义样式配置' },
  { icon: '📱', title: '响应式设计', desc: '完美适配各种设备，提供优秀的阅读体验' },
  { icon: '🔍', title: '全文搜索', desc: '内置本地全文搜索，快速定位所需内容' },
  { icon: '🌙', title: '深色模式', desc: '支持明暗主题切换，保护视力健康' },
  { icon: '🌐', title: '国际化支持', desc: '原生支持多语言文档，面向全球用户' }
])

const quickNavs = ref([
  { icon: '📖', title: '指南', desc: '快速上手和配置说明', link: '/obei-docs/指南目录/01-介绍' },
  { icon: '⚙️', title: '配置', desc: '详细的配置选项参考', link: '/obei-docs/指南目录/02-配置' },
  { icon: '🔌', title: 'API', desc: '完整的 API 接口文档', link: '/obei-docs/api/' },
])
</script>

<style scoped>
.landing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero 区域 */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 60px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.btn-primary:hover {
  background: var(--vp-c-brand-2);
}

.btn-secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.hero-image {
  flex: 0 0 300px;
}

.hero-illustration {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), transparent);
  border-radius: 50%;
}

.hero-illustration .icon {
  font-size: 120px;
}

/* 特性区域 */
.features {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 48px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-desc {
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* 快速导航 */
.quick-nav {
  padding: 60px 0;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.nav-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.nav-icon {
  font-size: 32px;
}

.nav-info {
  flex: 1;
}

.nav-info h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.nav-info p {
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.nav-arrow {
  font-size: 20px;
  color: var(--vp-c-text-3);
  transition: transform 0.3s ease;
}

.nav-card:hover .nav-arrow {
  transform: translateX(4px);
  color: var(--vp-c-brand-1);
}

/* 页脚 */
.landing-footer {
  text-align: center;
  padding: 40px 0;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

/* 响应式 */
@media (max-width: 960px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    order: -1;
  }

  .hero-illustration {
    width: 200px;
    height: 200px;
  }

  .hero-illustration .icon {
    font-size: 80px;
  }

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid,
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>
