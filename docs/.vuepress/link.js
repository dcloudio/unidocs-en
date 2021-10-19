// markdown-it plugin for:
// 1. adding target="_blank" to external links
// 2. converting internal links to <router-link>

const url = require('url')

module.exports = (md, externalAttrs, pageSuffix = '.html') => {
  let hasOpenRouterLink = false
  let hasOpenExternalLink = false

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const { relativePath } = env
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')
    if (hrefIndex >= 0) {
      const link = token.attrs[hrefIndex]
      const href = link[1]
      const isExternal = /^https?:/.test(href)
      if (isExternal) {
        Object.entries(externalAttrs).forEach(([key, val]) => {
          token.attrSet(key, val)
        })
        if (/_blank/i.test(externalAttrs['target'])) {
          hasOpenExternalLink = true
        }
      } else if (href.startsWith('#')) {
        tokens.forEach(token => {
          if (token.type === 'text') {
            const textMatch = token.content.match(/(\S+)\@(\S+)/)
            if (textMatch) {
              token.content = textMatch[1]
            }
          }
        })
      } else {
        hasOpenRouterLink = true
        tokens[idx] = toRouterLink(token, link, relativePath, pageSuffix)
      }
    }
    return self.renderToken(tokens, idx, options)
  }

  function toRouterLink(token, link, relativePath, suffix) {
    link[0] = 'to'
    let to = link[1]

    // convert link to filename and export it for existence check
    const links = md.$data.links || (md.$data.links = [])
    links.push(to)

    // relative path usage.
    if (!to.startsWith('/')) {
      to = relativePath
        ? url.resolve('/' + relativePath, to)
        : ensureBeginningDotSlash(to)
    }
    const toUrl = url.parse(to)
    let pathname = toUrl.pathname
    if (pathname.endsWith('/')) {
      pathname += 'README.md'
    } else if (!/\.\S+$/.test(pathname)) {
      pathname += '.md'
    }
    to = pathname.replace(/\.(md)?$/, suffix)
    const query = toUrl.query
    let hash = toUrl.hash
    if (query) {
      const id = query.split('&').find(str => str.startsWith('id='))
      if (id) {
        hash = `#${id.replace('id=', '').toLowerCase()}`
      }
    }
    if (hash) {
      to += hash
    }
    // markdown-it encodes the uri
    link[1] = decodeURI(to)

    // export the router links for testing
    const routerLinks = md.$data.routerLinks || (md.$data.routerLinks = [])
    routerLinks.push(to)

    return Object.create(token, {
      tag: { value: 'RouterLink' }
    })
  }

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (hasOpenRouterLink) {
      token.tag = 'RouterLink'
      hasOpenRouterLink = false
    }
    if (hasOpenExternalLink) {
      hasOpenExternalLink = false
      // add OutBoundLink to the beforeend of this link if it opens in _blank.
      return '<OutboundLink/>' + self.renderToken(tokens, idx, options)
    }
    return self.renderToken(tokens, idx, options)
  }
}

const beginningSlashRE = /^\.\//

function ensureBeginningDotSlash(path) {
  if (beginningSlashRE.test(path)) {
    return path
  }
  return './' + path
}
