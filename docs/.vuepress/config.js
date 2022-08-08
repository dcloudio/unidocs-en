const { slugify } = require('@vuepress/shared-utils')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText, tabs } = require('./utils')
const copyOptions = require('./config/copy');

const config = {
  theme: 'vuepress-theme-uni-app-test',
  title: 'uni-app',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }],
    ['script', { src: `/js/redirect.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }],
    ['script', { src: 'https://hm.baidu.com/hm.js?335faa6b53d8671e088767b0b95a706e' }]
  ],
  themeConfig: {
    titleLogo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/e422ceca-23ef-449a-afd7-745ad177a7e9.png',
    logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/49f7ac67-4a95-47ad-81ec-b1c2bdde1ece.png',
    sidebar: createSidebar(tabs),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://github.com/dcloudio/unidocs-en',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'lastUpdated',
    // smoothScroll: true,
    algolia: {
      apiKey: 'ca67b01d14df58783e2f7dc45c79736e',
      indexName: 'en-uniapp-dcloud',
      appId: 'TZ0EGQ9J1Y',
      searchParameters: { hitsPerPage: 50 }
    },
    isDevelopment: process.env.NODE_ENV === 'development'
  },
  markdown: {
    slugify(str) {
      if (typeof str !== 'string') return ''

      let slug = str
      if (slug.includes('@')) {
        let array = slug.split('@')
        slug = array.length > 1 ? array[array.length - 1] : str
      } else {
        slug = simplifySlugText(slug.toLowerCase()).trim()
      }
      return slugify(slug)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown(config) {
      config
        .plugin('translate')
        .use(translatePlugin)
        .end()
        .plugin('convert-header')
        .use(headerPlugin)
        .end()
        .plugin('normallize-link')
        .use(require('./markdown/normallizeLink'))
    }
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ]
}

module.exports = config