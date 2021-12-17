const parse = require('../../../scripts/parse')

function translate(content) {
  return parse(content).target.join('\n')
}

module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, ...array) {
      if (src) {
        src = translate(src)
      }
      return mdParse.bind(this)(src, ...array)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, ...array) {
      if (typeof src === 'string' && src) {
        src = translate(src)
      }
      return mdRender.bind(this)(src, ...array)
    }
  })(md.render)
}
