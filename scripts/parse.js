function isSame(origin, target) {
  const test = /[\s#*\-`|</│└├┌:]*/
  const originStart = origin.match(test)[0]
  const targetStart = target.match(test)[0]
  return (originStart.trimEnd() || originStart) === (targetStart.trimEnd() || targetStart)
}

function parse(str = '') {
  const originTest = /[\u4e00-\u9fa5]/
  const origin = []
  const target = []
  const notTranslated = []
  const array = str.split(/\r?\n/)
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    const nextItem = array[index + 1]
    if (item && originTest.test(item) && nextItem && !originTest.test(nextItem) && isSame(item, nextItem)) {
      target.push(nextItem)
      index++
    } else {
      target.push(item)
      if (originTest.test(item)) {
        notTranslated.push(`${`${index + 1}: `.padStart(5) + item}`)
      }
    }
    origin.push(item)
  }
  return {
    origin: origin,
    target: target,
    notTranslated
  }
}

module.exports = parse
