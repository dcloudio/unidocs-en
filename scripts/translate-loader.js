const parse = require('./parse')

module.exports = function (src) {
  const { target } = parse(src)
  return target.join('\n')
}
