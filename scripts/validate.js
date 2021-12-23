const fs = require('fs')
const path = require('path')
const parse = require('./parse')

const argv = process.argv
const validateResultPath = path.join(__dirname, '..', `validate_result.md`)

function runner(mdPath, clear = true) {
  if (mdPath.endsWith('.md')) {
    validateMd(path.join(__dirname, '../docs', mdPath.replace(/^docs\//, '')))
  } else {
    clear && (fs.existsSync(validateResultPath) && fs.unlinkSync(validateResultPath))
    const mdFileDir = path.resolve(__dirname, '../docs', mdPath)
    fs.readdir(mdFileDir, (err, files) => {
      files.forEach(fileName => {
        if (!fileName.startsWith('.'))
          validateMd(path.join(mdFileDir, fileName), fileName)
      })
    })
  }
}

runner(argv.length > 2 ? argv[argv.length - 1] : '')

function validateMd(mdPath, fileName) {
  if (!mdPath.endsWith('.md')) {
    return runner(mdPath, false);
  }
  fs.readFile(mdPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      throw err
    }
    const result = parse(data)
    if (!fileName) {
      console.log(result.notTranslated)
      return;
    }
    if (!result.notTranslated.length) return;
    fs.writeFileSync(validateResultPath, `
#### ${mdPath.match(/docs\\([\s\S]+)/)[1]} not translated content 
\`\`\`
${result.notTranslated.join('\n')}
\`\`\`
---

`, { flag: 'a+' })
  })
}
