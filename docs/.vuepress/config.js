const path = require('path')
const fs = require('fs')
const { slugify } = require('@vuepress/shared-utils')
const parse = require('../../scripts/parse')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')

function parseBar(file, options) {
  // TODO use markdown-it
  function translate(content) {
    return parse(content).target.join('\n')
  }
  const text = translate(fs.readFileSync(file, { encoding: 'utf8' }))
  const itemArray = []
  let itemCache
  const textName = options.text || 'text'
  const linkName = options.link || 'link'
  const childrenName = options.children || 'children'
  const array = text.match(/^[\t ]*[-*]\s+.+/gm) || []
  array.forEach(str => {
    const [_, text, link] = str.match(/[-*]\s+\[(.+?)\]\((.+?)\)/) || str.match(/[-*]\s+(.+)/)
    const item = {}
    item[textName] = text
    item[linkName] = link && (/^\S+\:\/\//.test(link) ? link : path.join('/', link.replace(/\.md\b/, '').replace(/\bREADME\b/, '').replace(/\?id=/, '#')).replace(/\\/g, '/'))
    if (/^[-*]/.test(str)) {
      itemCache = item
      itemArray.push(item)
    } else {
      delete itemCache[linkName]
      itemCache[childrenName] = itemCache[childrenName] || []
      itemCache[childrenName].push(item)
    }
  })
  return itemArray
}

const nav = parseBar(path.join(__dirname, '../', '_navbar.md'), {
  children: 'items'
})

const tabs = ['/collocation/', '/component/', '/api/', '/']
const sidebar = {}
tabs.forEach(tab => {
  sidebar[tab] = parseBar(path.join(__dirname, '../', tab, '_sidebar.md'), {
    text: 'title',
    link: 'path'
  })
})

const config = {
  // TODO use theme
  title: 'uni-app',
  themeConfig: {
    // TODO use plugin/theme
    nav,
    // TODO use plugin/theme
    sidebar,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'dcloudio/unidocs-en',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true
  },
  markdown: {
    slugify(str) {
      const array = str.split('@')
      return slugify(array.length > 1 ? array[array.length - 1] : str)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown(config) {
      config
        .plugin('translate')
        .use(translatePlugin)
        .end()
        .plugin('convert-header')
        .use(headerPlugin)
    }
  }
}

module.exports = config