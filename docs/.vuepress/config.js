const path = require('path')
const fs = require('fs')
const { slugify } = require('@vuepress/shared-utils')
const parse = require('../../scripts/parse')

const nav = []
const text = parse(fs.readFileSync(path.join(__dirname, '../', '_navbar.md'), { encoding: 'utf8' })).target.join('\n')
let itemCache
const array = text.match(/^[\t ]*[-*]\s+.+/gm) || []
array.forEach(str => {
  const [_, text, link] = str.match(/[-*]\s+\[(.+?)\]\((.+?)\)/) || str.match(/[-*]\s+(.+)/)
  const item = {
    text,
    link: link && (/^\S+\:\/\//.test(link) ? link : path.join('/', link.replace(/\.md\b/, '').replace(/\bREADME\b/, '').replace(/\?id=/, '#')))
  }
  if (/^[-*]/.test(str)) {
    itemCache = item
    nav.push(item)
  } else {
    delete itemCache.link
    itemCache.items = itemCache.items || []
    itemCache.items.push(item)
  }
})

const tabs = ['/collocation/', '/component/', '/api/', '/']
const sidebar = {}
tabs.forEach(tab => {
  const sidebarItems = sidebar[tab] = []
  const text = parse(fs.readFileSync(path.join(__dirname, '../', tab, '_sidebar.md'), { encoding: 'utf8' })).target.join('\n')
  let itemCache
  const array = text.match(/^[\t ]*[-*]\s+.+/gm) || []
  array.forEach(str => {
    const [_, title, link] = str.match(/[-*]\s+\[(.+?)\]\((.+?)\)/) || str.match(/[-*]\s+(.+)/)
    const item = {
      title,
      path: link && (/^\S+\:\/\//.test(link) ? link : path.join('/', link.replace(/\.md\b/, '').replace(/\bREADME\b/, '').replace(/\?id=/, '#')))
    }
    if (/^[-*]/.test(str)) {
      itemCache = item
      sidebarItems.push(item)
    } else {
      delete itemCache.path
      itemCache.children = itemCache.children || []
      itemCache.children.push(item)
    }
  })
})

const config = {
  // TODO use theme
  title: 'uni-app',
  themeConfig: {
    nav,
    sidebar,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'dcloudio/unidocs-en',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true
  },
  markdown: {
    slugify(str) {
      const array = str.split('@')
      return array.length > 1 ? array[array.length - 1] : slugify(str)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4']
  },
  chainWebpack(config) {
    config.module.rule('markdown').use('translate').loader(path.resolve(path.join(__dirname, '../../scripts/translate-loader.js'))).before()
  }
}

module.exports = config