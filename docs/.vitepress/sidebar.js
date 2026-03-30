import fs from 'fs'
import path from 'path'

/**
 * 自动生成侧边栏配置（支持嵌套子目录和数字前缀排序）
 * @param {string} docsRoot - 文档根目录
 * @returns {Array} 侧边栏配置数组
 */
export function autoSidebar(docsRoot) {
  const sidebar = []
  const items = fs.readdirSync(docsRoot)

  // 排序：目录在前，文件在后，数字前缀优先
  const sortedItems = sortByPrefix(items, docsRoot)

  for (const item of sortedItems) {
    // 跳过隐藏文件、.vitepress 目录和 public 目录
    if (item.startsWith('.') || item === 'public' || item === '.vitepress') {
      continue
    }

    const fullPath = path.join(docsRoot, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 处理目录
      const section = generateSection(fullPath, item, item)
      if (section) {
        sidebar.push(section)
      }
    } else if (item.endsWith('.md') && item !== 'index.md') {
      // 处理根目录下的 md 文件
      const fileName = removeExtension(item)
      const text = getTitleFromMd(fullPath) || stripPrefix(fileName)
      sidebar.push({
        text,
        link: `/${fileName}`
      })
    }
  }

  return sidebar
}

/**
 * 递归生成一个目录的侧边栏配置
 * @param {string} dirPath - 目录绝对路径
 * @param {string} dirName - 目录名称
 * @param {string} linkPrefix - 链接前缀
 */
function generateSection(dirPath, dirName, linkPrefix) {
  const files = fs.readdirSync(dirPath)
  const items = []

  // 排序：目录在前，文件在后，数字前缀优先
  const sortedFiles = sortByPrefix(files, dirPath)

  for (const file of sortedFiles) {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 递归处理子目录
      const subSection = generateSection(
        fullPath,
        file,
        `${linkPrefix}/${file}`
      )
      if (subSection) {
        items.push(subSection)
      }
    } else if (file.endsWith('.md')) {
      const fileName = removeExtension(file)
      const text = getTitleFromMd(fullPath) || stripPrefix(fileName)

      items.push({
        text,
        link: `/${linkPrefix}/${fileName === 'index' ? '' : fileName}`
      })
    }
  }

  if (items.length === 0) return null

  return {
    text: getDirTitle(stripPrefix(dirName)),
    collapsed: false,
    items
  }
}

/**
 * 按数字前缀排序
 * @param {string[]} files - 文件/目录名数组
 * @param {string} dirPath - 目录路径
 * @returns {string[]} 排序后的数组
 */
function sortByPrefix(files, dirPath) {
  return files.sort((a, b) => {
    const aIsDir = fs.statSync(path.join(dirPath, a)).isDirectory()
    const bIsDir = fs.statSync(path.join(dirPath, b)).isDirectory()

    // 目录在前，文件在后
    if (aIsDir && !bIsDir) return -1
    if (!aIsDir && bIsDir) return 1

    // 同类型按数字前缀排序，无前缀的排后面
    const aNum = extractPrefixNumber(a)
    const bNum = extractPrefixNumber(b)

    if (aNum !== null && bNum !== null) {
      return aNum - bNum
    }
    if (aNum !== null) return -1
    if (bNum !== null) return 1

    // 都没有数字前缀，按字母排序
    return a.localeCompare(b, 'zh-CN')
  })
}

/**
 * 提取文件名开头的数字
 * @param {string} name - 文件名
 * @returns {number|null} 数字或 null
 */
function extractPrefixNumber(name) {
  const match = name.match(/^(\d+)[-_.]?/)
  return match ? parseInt(match[1], 10) : null
}

/**
 * 移除文件名开头的数字前缀
 * @param {string} name - 文件名（不含扩展名）
 * @returns {string} 移除前缀后的名称
 */
function stripPrefix(name) {
  return name.replace(/^\d+[-_.]?/, '')
}

/**
 * 从 md 文件中提取第一个标题
 */
function getTitleFromMd(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    // 匹配 frontmatter 中的 title
    const frontmatterMatch = content.match(/^---[\s\S]*?^title:\s*(.+?)$/m)
    if (frontmatterMatch) {
      return frontmatterMatch[1].trim()
    }

    // 匹配 # 标题
    const h1Match = content.match(/^#\s+(.+)$/m)
    if (h1Match) {
      return h1Match[1].trim()
    }
  } catch (e) {
    // ignore
  }
  return null
}

/**
 * 移除文件扩展名
 */
function removeExtension(filename) {
  return filename.replace(/\.md$/, '')
}

/**
 * 目录名称映射（可自定义）
 */
function getDirTitle(dirName) {
  const titleMap = {
    'guide': '指南',
    'api': 'API 参考',
    'tutorial': '教程',
    'faq': '常见问题',
    'changelog': '更新日志',
    '测试目录': '测试目录'
  }
  return titleMap[dirName] || dirName
}
