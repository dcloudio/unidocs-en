const path = require('path')
const fs = require('fs')
const { slugify } = require('@vuepress/shared-utils')
const parse = require('../../scripts/parse')
const convertRouterLinkPlugin = require('./link')
const sharedUtils = require('@vuepress/shared-utils')

function filter(content) {
  return parse(content).target.join('\n')
}

// hook node_modules/@vuepress/core/lib/node/Page.js:process()
sharedUtils.fs.readFile = (function (readFile) {
  return function (...array) {
    if (array.length === 2) {
      const file = array[0]
      const encoding = array[1]
      if (typeof file === 'string' && encoding === 'utf-8' && file.endsWith('.md')) {
        return readFile(...array).then(filter)
      }
    }
    return readFile(...array)
  }
})(sharedUtils.fs.readFile)

function parseBar(file, options) {
  const text = filter(fs.readFileSync(file, { encoding: 'utf8' }))
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
      return array.length > 1 ? array[array.length - 1] : slugify(str)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown(config) {
      config
        .plugin('convert-router-link')
        .use(convertRouterLinkPlugin, [{
          target: '_blank',
          rel: 'noopener noreferrer'
        }])
    }
  },
  chainWebpack(config) {
    config.module.rule('markdown').use('translate').loader(path.resolve(path.join(__dirname, '../../scripts/translate-loader.js'))).before()
  }
}

module.exports = config