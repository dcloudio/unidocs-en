function handleRedirectForCleanUrls(router, to) {
  if (isRouteExists(router, to.path)) {
    return to.path
  } else {
    if (!/(\/|\.html)$/.test(to.path)) {
      const endingSlashUrl = to.path + '/'
      const endingHtmlUrl = to.path + '.html'
      if (isRouteExists(router, endingHtmlUrl)) {
        return endingHtmlUrl
      } else if (isRouteExists(router, endingSlashUrl)) {
        return endingSlashUrl
      } else {
        return to.path
      }
    } else if (/\/$/.test(to.path)) {
      const endingHtmlUrl = to.path.replace(/\/$/, '') + '.html'
      if (isRouteExists(router, endingHtmlUrl)) {
        return endingHtmlUrl
      } else {
        return to.path
      }
    } else {
      return to.path
    }
  }
}

function isRouteExists(router, path) {
  const pathLower = path.toLowerCase()
  return router.options.routes.some(route => route.path.toLowerCase() === pathLower)
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  router.beforeHooks.unshift((to, from, next) => {
    const id = to.query.id
    if (id) {
      return next({
        path: handleRedirectForCleanUrls(router, to),
        hash: '#' + id.toLowerCase()
      })
    }
    next()
  })

  router.options.scrollBehavior = function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      if (Vue.$vuepress.$get('disableScrollBehavior')) {
        return false
      }
      const selector = decodeURIComponent(to.hash)
      const target = {
        selector
      }
      if (!document.querySelector(selector)) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(target)
          }, 500)
        })
      }
      return target
    } else {
      return { x: 0, y: 0 }
    }
  }
}
