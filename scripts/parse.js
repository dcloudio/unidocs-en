function parse(str = '') {
  const originTest = /[\u4e00-\u9fa5]/
  const wordTest = /[A-z]/
  const origin = []
  const target = []
  const notTranslated = []
  const array = str.split(/\r?\n/)
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    const nextItem = array[index + 1]
    if (item && nextItem && wordTest.test(nextItem) && !originTest.test(nextItem)) {
      target.push(nextItem)
      index++
    } else {
      target.push(item)
      if (originTest.test(item)) {
        notTranslated.push(`${String(`${index + 1}: `).padStart(5)}${item}`)
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
