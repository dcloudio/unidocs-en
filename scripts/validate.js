const fs = require('fs')
const path = require('path')
const parse = require('./parse')

const argv = process.argv
const mdPath = argv[argv.length - 1]
if (mdPath.endsWith('.md')) {
  fs.readFile(path.join(__dirname, '../docs', mdPath.replace(/^docs\//, '')), { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      throw err
    }
    const result = parse(data)
    console.log(result.notTranslate)
  })
}
